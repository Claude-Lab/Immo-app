import {Role} from "./role";
import {Address} from "./address";
import {Contract} from "./contract";

export class User {
  id: number;
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  mobile: string;
  phone: string;
  password: string;
  avatar: string;
  validated: boolean;
  createdAt: Date;
  updatedAt: Date;
  roles: Role[];
  tenantAddressAfter: Address;
  tenantAddressBefore: Address;
  contracts: Contract[];
  guarantorTenant_id: User;
  ownerAddress: Address;
  guarantorAdress: Address;
  token?: any;

  constructor(id: number,
              firstname: string,
              lastname: string,
              fullname: any,
              email: string,
              mobile: string,
              phone: string,
              password: string,
              avatar: string,
              validated: boolean,
              tenantAddressAfter: Address,
              tenantAddressBefore: Address,
              contracts: Contract[],
              guarantorTenant_id: User,
              ownerAddress: Address,
              guarantorAdress: Address,
              roles: Role[],
              token: any,
              createdAt: Date,
              updatedAt: Date) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = this.firstname + ' ' + this.lastname;
    this.email = email;
    this.mobile = mobile;
    this.phone = phone;
    this.password = password;
    this.avatar = avatar;
    this.validated = validated;
    this.tenantAddressBefore = tenantAddressBefore;
    this.tenantAddressAfter = tenantAddressAfter;
    this.contracts = contracts;
    this.guarantorTenant_id = guarantorTenant_id;
    this.ownerAddress = ownerAddress;
    this.guarantorAdress = guarantorAdress;
    this.roles = roles;
    this.token = token;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
