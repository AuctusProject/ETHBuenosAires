import { TokenStorage } from "./TokenStorage";
import { ExtensionStorage } from "./ExtensionStorage";

export class SmartAccountStorage {
    name: string;
    address: string;
    tokens: TokenStorage[] = new Array<TokenStorage>();
    extensions: ExtensionStorage[] = new Array<ExtensionStorage>();

    constructor(name?: string, address?: string){
        this.name = name;
        this.address = address;
    }

    addTokenData(symbol: string, decimals: number, address: string): boolean {
        for(let i = 0; i < this.tokens.length; ++i) {
            if (this.tokens[i].address == address) {
                this.tokens[i].decimals = decimals;
                this.tokens[i].symbol = symbol;
                return true;
            }
        }
        this.tokens.push(new TokenStorage(symbol, decimals, address));
        return true;
    }

    removeTokenData(address: string): boolean {
        for(let i = 0; i < this.tokens.length; ++i) {
            if (this.tokens[i].address == address) {
                this.tokens.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    addExtension(address: string): boolean {
        for(let i = 0; i < this.extensions.length; ++i) {
            if (this.extensions[i].address == address) {
                return true;
            }
        }
        this.extensions.push(new ExtensionStorage(address));
        return true;
    }

    removeExtension(address: string): boolean {
        for(let i = 0; i < this.extensions.length; ++i) {
            if (this.extensions[i].address == address) {
                this.extensions.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    setExtensionIdentifiers(extensionAddress: string, readIdentifiers: string[]): boolean {
        for(let i = 0; i < this.extensions.length; ++i) {
            if (this.extensions[i].address == extensionAddress) {
                this.extensions[i].setIdentifiers(readIdentifiers);
                return true;
            }
        }
        return false;
    }

    getAllExtensionList(chainId: string): ExtensionStorage[] {
        let marketPlaceExtensions = this.getMarketplaceExtensions(chainId);
        let allExtensions = [];
        for(let i = 0; i < this.extensions.length; ++i) { 
            allExtensions.push(this.extensions[i]);
        }
        for(let i = 0; i < marketPlaceExtensions.length; ++i) {
            let existing = false;
            for(let j = 0; j < this.extensions.length; ++j) { 
                if (this.extensions[j].address == marketPlaceExtensions[i].address) {
                    existing = true;
                    break;
                }
            }
            if (!existing) {
                allExtensions.push(marketPlaceExtensions[i]);
            }
        }
        return allExtensions;
    }

    getMarketplaceExtensions(chainId: string): ExtensionStorage[] {
        let result = [];
        switch (chainId) {
            case "1": 
                //result.push(new ExtensionStorage('0x018ad16649D90F4A3A8195b57677491C687b5309', null, ['0x4ea3bb1eaa05b77c4b0eeee0116a3177c6d62319dd7149ae148185d9e09de74a']));
                //result.push(new ExtensionStorage('0x018ad16649D90F4A3A8195b57677491C687b5309', null, ['0x8f18f658d37b632619e90699ac1fae34e82c1a03435ac5dc930259af8e29e56c','0xd5342cfae8cfcd762ee9ec644e43767d823c2d2f1ea741cbb93224eaa6b8449e']));
                break;
            case "2":
                //result.push(new ExtensionStorage('0x018ad16649D90F4A3A8195b57677491C687b5309', null, ['0x4ea3bb1eaa05b77c4b0eeee0116a3177c6d62319dd7149ae148185d9e09de74a']));
                //result.push(new ExtensionStorage('0x018ad16649D90F4A3A8195b57677491C687b5309', null, ['0x8f18f658d37b632619e90699ac1fae34e82c1a03435ac5dc930259af8e29e56c','0xd5342cfae8cfcd762ee9ec644e43767d823c2d2f1ea741cbb93224eaa6b8449e']));
                break;
            case "3":
                //result.push(new ExtensionStorage('0x018ad16649D90F4A3A8195b57677491C687b5309', null, ['0x4ea3bb1eaa05b77c4b0eeee0116a3177c6d62319dd7149ae148185d9e09de74a']));
                //result.push(new ExtensionStorage('0x018ad16649D90F4A3A8195b57677491C687b5309', null, ['0x8f18f658d37b632619e90699ac1fae34e82c1a03435ac5dc930259af8e29e56c','0xd5342cfae8cfcd762ee9ec644e43767d823c2d2f1ea741cbb93224eaa6b8449e']));
                break;
            case "4":
                result.push(new ExtensionStorage('0x018ad16649D90F4A3A8195b57677491C687b5309', null, ['0x4ea3bb1eaa05b77c4b0eeee0116a3177c6d62319dd7149ae148185d9e09de74a']));
                //result.push(new ExtensionStorage('0x018ad16649D90F4A3A8195b57677491C687b5309', null, ['0x8f18f658d37b632619e90699ac1fae34e82c1a03435ac5dc930259af8e29e56c','0xd5342cfae8cfcd762ee9ec644e43767d823c2d2f1ea741cbb93224eaa6b8449e']));
                break;
            default: 
                break;
        }
        return result;
    }
}