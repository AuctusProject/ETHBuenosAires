import { Component, OnInit, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartAccountService } from '../../services/smart-account.service';
import { ParameterUI } from '../../model/ParameterUI';
import { Web3Service } from '../../services/web3.service';
import * as SolidityCoder from 'web3/lib/solidity/coder';


@Component({
  selector: 'app-extension-parameter-group',
  templateUrl: './extension-parameter-group.component.html',
  styleUrls: ['./extension-parameter-group.component.css']
})
export class ExtensionParameterGroupComponent implements OnInit {

    @Input() title: string;
    @Input() actionButtonName: string;
    @Input() backButtonName: string;
    @Input() functionSignature: string;
    @Input() smartAccountAddress: string;
    @Input() extensionAddress: string;
    @Input() identifier: string;
    @Input() disabled: boolean;
    @Input() expanded: boolean;
    @Input() parameters: ParameterUI[];
    @Input() initialValues: any[];
    @Output() backClick = new EventEmitter();
    @Output() executed = new EventEmitter();
    executing: boolean;
    values = new Array<any>();

    constructor(private route: ActivatedRoute, 
        private zone: NgZone, 
        private router: Router,
        private smartAccountService: SmartAccountService,
        private web3Service: Web3Service) { }
    
    ngOnInit() {
        this.executing = false;
        this.smartAccountService.startWeb3();
    }

    execute() {
        if (this.isValidParameters()) {
            let types = [];
            let values = [];
            for (let i = 0; i < this.values.length; ++ i) {
                types.push(this.parameters[i].getWeb3Type());
                values.push(this.values[i].value)
            }
            let data = this.functionSignature + SolidityCoder.encodeParams(types, values);
            let self = this;
            this.smartAccountService.sendGenericTransaction(this.smartAccountAddress, 0, 0, data).subscribe(txHash => {
                self.web3Service.isMined(txHash).subscribe(ret => {
                    self.executed.emit();
                });
            });
        }
    }

    back() {
        this.backClick.emit();
    }

    parameterSet(value: any) {
        for (let i = 0; i < this.values.length; ++ i) {
            if (this.values[i].index == value.index) {
                this.values[i] = value;
                return;
            }
        }
        this.values.push(value);
    }

    isValidParameters(): boolean {
        if (this.values.length != this.parameters.length) {
            return false;
        } else {
            for (let i = 0; i < this.values.length; ++ i) {
                if (!this.values[i].status) {
                    return false;
                }
            }
            return true;
        }
    }
}
