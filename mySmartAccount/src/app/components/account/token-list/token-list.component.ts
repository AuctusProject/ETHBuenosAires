import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { SmartAccountService } from '../../../services/smart-account.service';
import { TokenStorage } from '../../../model/TokenStorage';
import { AddressUtil } from '../../../util/addressUtil';
import { ParameterUI } from '../../../model/ParameterUI';
import { Web3Service } from '../../../services/web3.service';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.css']
})
export class TokenListComponent implements OnInit {

  @Input() tokenBalanceList: TokenStorage[];
  @Input() smartAccountAddress: string;
  showTransfer: boolean;
  showList: boolean;
  showAdd: boolean;
  executing: boolean;
  contractAddress: any;
  symbol: any;
  decimals: any;
  toAddress: any;
  amount: any;
  selectedToken: TokenStorage;
  amountParameter: ParameterUI;

  constructor(
    private localStorageService: LocalStorageService,
    private smartAccountService: SmartAccountService, 
    private ref: ChangeDetectorRef,
    private web3Service: Web3Service) { }

  ngOnInit() {
    this.cancel();
  }

  cancel() {
    this.showTransfer = false;
    this.showList = true;
    this.showAdd = false;
    this.clearAll();
  }

  clearAll() {
    this.executing = false;
    this.contractAddress = "";
    this.symbol = "";
    this.toAddress = "";
    this.selectedToken = null;
    this.amount = null;
    this.decimals = null;
    this.executing = false;
  }

  setNewToken() {
    this.showTransfer = false;
    this.showList = false;
    this.showAdd = true;
    this.clearAll();
  }

  addToken() {
    if (this.contractAddress && this.contractAddress.status && this.decimals && this.decimals.status 
      && this.decimals.value > 0 && this.symbol && this.symbol.status) {
      this.executing = true;
      let accountData = this.localStorageService.getAccountData();
      let smartAccount = accountData.getSmartAccount(this.smartAccountAddress);
      smartAccount.addTokenData(this.symbol.value.toUpperCase(), this.decimals.value, this.contractAddress.value);
      this.tokenBalanceList = smartAccount.tokens;
      accountData.updateSmartAccount(smartAccount);
      this.localStorageService.setAccountData(accountData);
      let self = this;
      this.smartAccountService.getTokenBalance(this.smartAccountAddress, this.contractAddress.value, this.decimals).subscribe(ret => {
        self.updateBalance(self.contractAddress.value, ret);
        self.cancel();
      });
    }
  }

  setTransferToken(address: string) {
    for(let i = 0; i < this.tokenBalanceList.length; ++i) {
      if (this.tokenBalanceList[i].address == address) {
        this.selectedToken = this.tokenBalanceList[i];
        break;
      }
    }
    this.amountParameter = new ParameterUI("Amount", 2, this.selectedToken.decimals, false, true, false);
    this.showTransfer = true;
    this.showList = false;
    this.showAdd = false;
  }

  transferToken() {
    if (this.toAddress && this.toAddress.status && this.amount && this.amount.status && this.amount.value > 0) {
      this.executing = true;
      let self = this;
      let tokenAddress = this.selectedToken.address;
      this.smartAccountService.transferToken(this.smartAccountAddress, this.selectedToken.address, 
        this.toAddress.value, this.amount.value).subscribe(txHash => {
          self.web3Service.isMined(txHash).subscribe(ret => {
            self.smartAccountService.getTokenBalance(self.smartAccountAddress, tokenAddress, self.selectedToken.decimals).subscribe(ret => {
              self.updateBalance(tokenAddress, ret);
            });
            self.cancel();
          });
      });
    }
  }

  removeToken(address: string) {
    if (address && AddressUtil.isValid(address)) {
      let accountData = this.localStorageService.getAccountData();
      let smartAccount = accountData.getSmartAccount(this.smartAccountAddress);
      smartAccount.removeTokenData(address);
      this.tokenBalanceList = smartAccount.tokens;
      accountData.updateSmartAccount(smartAccount);
      this.localStorageService.setAccountData(accountData);
    }
  }

  updateBalance(tokenAddress: string, balance: number) {
    for(let i = 0; i < this.tokenBalanceList.length; ++i) {
      if (this.tokenBalanceList[i].address == tokenAddress) {
        this.tokenBalanceList[i]["balance"] = balance;
        break;
      }
    }
  }

  getRecipientIndex(): number {
    return 0;
  }

  getRecipientParameter(): ParameterUI {
    return new ParameterUI("Recipient Address", 3, 0, false, true, false);
  }

  setRecipientAddress(address: any) {
    this.toAddress = address;
  }

  getAmountIndex(): number {
    return 1;
  }

  setAmount(amount: any) {
    this.amount = amount;
  }

  getContractAddressIndex(): number {
    return 0;
  }

  getContractAddressParameter(): ParameterUI {
    return new ParameterUI("Contract Address", 3, 0, false, true, false);
  }

  setContractAddress(address: any) {
    this.contractAddress = address;
  }

  getSymbolIndex(): number {
    return 1;
  }

  getSymbolParameter(): ParameterUI {
    return new ParameterUI("Symbol", 6, 0, false, true, false);
  }

  setSymbol(symbol: any) {
    this.symbol = symbol;
  }

  getDecimalsIndex(): number {
    return 2;
  }

  getDecimalsParameter(): ParameterUI {
    return new ParameterUI("Decimals", 1, 1, false, true, false);
  }

  setDecimals(decimals: any) {
    this.decimals = decimals;
  }
}
