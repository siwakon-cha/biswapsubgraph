// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class EmergencyWithdraw extends ethereum.Event {
  get params(): EmergencyWithdraw__Params {
    return new EmergencyWithdraw__Params(this);
  }
}

export class EmergencyWithdraw__Params {
  _event: EmergencyWithdraw;

  constructor(event: EmergencyWithdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class BiswapMasterchef__poolInfoResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class BiswapMasterchef__userInfoResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class BiswapMasterchef extends ethereum.SmartContract {
  static bind(address: Address): BiswapMasterchef {
    return new BiswapMasterchef("BiswapMasterchef", address);
  }

  BONUS_MULTIPLIER(): BigInt {
    let result = super.call(
      "BONUS_MULTIPLIER",
      "BONUS_MULTIPLIER():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_BONUS_MULTIPLIER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BONUS_MULTIPLIER",
      "BONUS_MULTIPLIER():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  BSW(): Address {
    let result = super.call("BSW", "BSW():(address)", []);

    return result[0].toAddress();
  }

  try_BSW(): ethereum.CallResult<Address> {
    let result = super.tryCall("BSW", "BSW():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  BSWPerBlock(): BigInt {
    let result = super.call("BSWPerBlock", "BSWPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_BSWPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("BSWPerBlock", "BSWPerBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  depositedBsw(): BigInt {
    let result = super.call("depositedBsw", "depositedBsw():(uint256)", []);

    return result[0].toBigInt();
  }

  try_depositedBsw(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("depositedBsw", "depositedBsw():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  devPercent(): BigInt {
    let result = super.call("devPercent", "devPercent():(uint256)", []);

    return result[0].toBigInt();
  }

  try_devPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("devPercent", "devPercent():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  devaddr(): Address {
    let result = super.call("devaddr", "devaddr():(address)", []);

    return result[0].toAddress();
  }

  try_devaddr(): ethereum.CallResult<Address> {
    let result = super.tryCall("devaddr", "devaddr():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getMultiplier(_from: BigInt, _to: BigInt): BigInt {
    let result = super.call(
      "getMultiplier",
      "getMultiplier(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_from),
        ethereum.Value.fromUnsignedBigInt(_to)
      ]
    );

    return result[0].toBigInt();
  }

  try_getMultiplier(_from: BigInt, _to: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMultiplier",
      "getMultiplier(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_from),
        ethereum.Value.fromUnsignedBigInt(_to)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastBlockDevWithdraw(): BigInt {
    let result = super.call(
      "lastBlockDevWithdraw",
      "lastBlockDevWithdraw():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastBlockDevWithdraw(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastBlockDevWithdraw",
      "lastBlockDevWithdraw():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  migrator(): Address {
    let result = super.call("migrator", "migrator():(address)", []);

    return result[0].toAddress();
  }

  try_migrator(): ethereum.CallResult<Address> {
    let result = super.tryCall("migrator", "migrator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingBSW(_pid: BigInt, _user: Address): BigInt {
    let result = super.call(
      "pendingBSW",
      "pendingBSW(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user)
      ]
    );

    return result[0].toBigInt();
  }

  try_pendingBSW(_pid: BigInt, _user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingBSW",
      "pendingBSW(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  percentDec(): BigInt {
    let result = super.call("percentDec", "percentDec():(uint256)", []);

    return result[0].toBigInt();
  }

  try_percentDec(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("percentDec", "percentDec():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  poolInfo(param0: BigInt): BiswapMasterchef__poolInfoResult {
    let result = super.call(
      "poolInfo",
      "poolInfo(uint256):(address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new BiswapMasterchef__poolInfoResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_poolInfo(
    param0: BigInt
  ): ethereum.CallResult<BiswapMasterchef__poolInfoResult> {
    let result = super.tryCall(
      "poolInfo",
      "poolInfo(uint256):(address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BiswapMasterchef__poolInfoResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  poolLength(): BigInt {
    let result = super.call("poolLength", "poolLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_poolLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("poolLength", "poolLength():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  refAddr(): Address {
    let result = super.call("refAddr", "refAddr():(address)", []);

    return result[0].toAddress();
  }

  try_refAddr(): ethereum.CallResult<Address> {
    let result = super.tryCall("refAddr", "refAddr():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  refPercent(): BigInt {
    let result = super.call("refPercent", "refPercent():(uint256)", []);

    return result[0].toBigInt();
  }

  try_refPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("refPercent", "refPercent():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  safuPercent(): BigInt {
    let result = super.call("safuPercent", "safuPercent():(uint256)", []);

    return result[0].toBigInt();
  }

  try_safuPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("safuPercent", "safuPercent():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  safuaddr(): Address {
    let result = super.call("safuaddr", "safuaddr():(address)", []);

    return result[0].toAddress();
  }

  try_safuaddr(): ethereum.CallResult<Address> {
    let result = super.tryCall("safuaddr", "safuaddr():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakingPercent(): BigInt {
    let result = super.call("stakingPercent", "stakingPercent():(uint256)", []);

    return result[0].toBigInt();
  }

  try_stakingPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "stakingPercent",
      "stakingPercent():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  startBlock(): BigInt {
    let result = super.call("startBlock", "startBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_startBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("startBlock", "startBlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalAllocPoint(): BigInt {
    let result = super.call(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalAllocPoint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userInfo(param0: BigInt, param1: Address): BiswapMasterchef__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return new BiswapMasterchef__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_userInfo(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<BiswapMasterchef__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BiswapMasterchef__userInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _BSW(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _devaddr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _refAddr(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _safuaddr(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _BSWPerBlock(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _startBlock(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _stakingPercent(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _devPercent(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _refPercent(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get _safuPercent(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCall extends ethereum.Call {
  get inputs(): AddCall__Inputs {
    return new AddCall__Inputs(this);
  }

  get outputs(): AddCall__Outputs {
    return new AddCall__Outputs(this);
  }
}

export class AddCall__Inputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }

  get _allocPoint(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _lpToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _withUpdate(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class AddCall__Outputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class EnterStakingCall extends ethereum.Call {
  get inputs(): EnterStakingCall__Inputs {
    return new EnterStakingCall__Inputs(this);
  }

  get outputs(): EnterStakingCall__Outputs {
    return new EnterStakingCall__Outputs(this);
  }
}

export class EnterStakingCall__Inputs {
  _call: EnterStakingCall;

  constructor(call: EnterStakingCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EnterStakingCall__Outputs {
  _call: EnterStakingCall;

  constructor(call: EnterStakingCall) {
    this._call = call;
  }
}

export class LeaveStakingCall extends ethereum.Call {
  get inputs(): LeaveStakingCall__Inputs {
    return new LeaveStakingCall__Inputs(this);
  }

  get outputs(): LeaveStakingCall__Outputs {
    return new LeaveStakingCall__Outputs(this);
  }
}

export class LeaveStakingCall__Inputs {
  _call: LeaveStakingCall;

  constructor(call: LeaveStakingCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class LeaveStakingCall__Outputs {
  _call: LeaveStakingCall;

  constructor(call: LeaveStakingCall) {
    this._call = call;
  }
}

export class MassUpdatePoolsCall extends ethereum.Call {
  get inputs(): MassUpdatePoolsCall__Inputs {
    return new MassUpdatePoolsCall__Inputs(this);
  }

  get outputs(): MassUpdatePoolsCall__Outputs {
    return new MassUpdatePoolsCall__Outputs(this);
  }
}

export class MassUpdatePoolsCall__Inputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }
}

export class MassUpdatePoolsCall__Outputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }
}

export class MigrateCall extends ethereum.Call {
  get inputs(): MigrateCall__Inputs {
    return new MigrateCall__Inputs(this);
  }

  get outputs(): MigrateCall__Outputs {
    return new MigrateCall__Outputs(this);
  }
}

export class MigrateCall__Inputs {
  _call: MigrateCall;

  constructor(call: MigrateCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MigrateCall__Outputs {
  _call: MigrateCall;

  constructor(call: MigrateCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetCall extends ethereum.Call {
  get inputs(): SetCall__Inputs {
    return new SetCall__Inputs(this);
  }

  get outputs(): SetCall__Outputs {
    return new SetCall__Outputs(this);
  }
}

export class SetCall__Inputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _allocPoint(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _withUpdate(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetCall__Outputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }
}

export class SetDevAddressCall extends ethereum.Call {
  get inputs(): SetDevAddressCall__Inputs {
    return new SetDevAddressCall__Inputs(this);
  }

  get outputs(): SetDevAddressCall__Outputs {
    return new SetDevAddressCall__Outputs(this);
  }
}

export class SetDevAddressCall__Inputs {
  _call: SetDevAddressCall;

  constructor(call: SetDevAddressCall) {
    this._call = call;
  }

  get _devaddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDevAddressCall__Outputs {
  _call: SetDevAddressCall;

  constructor(call: SetDevAddressCall) {
    this._call = call;
  }
}

export class SetMigratorCall extends ethereum.Call {
  get inputs(): SetMigratorCall__Inputs {
    return new SetMigratorCall__Inputs(this);
  }

  get outputs(): SetMigratorCall__Outputs {
    return new SetMigratorCall__Outputs(this);
  }
}

export class SetMigratorCall__Inputs {
  _call: SetMigratorCall;

  constructor(call: SetMigratorCall) {
    this._call = call;
  }

  get _migrator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMigratorCall__Outputs {
  _call: SetMigratorCall;

  constructor(call: SetMigratorCall) {
    this._call = call;
  }
}

export class SetRefAddressCall extends ethereum.Call {
  get inputs(): SetRefAddressCall__Inputs {
    return new SetRefAddressCall__Inputs(this);
  }

  get outputs(): SetRefAddressCall__Outputs {
    return new SetRefAddressCall__Outputs(this);
  }
}

export class SetRefAddressCall__Inputs {
  _call: SetRefAddressCall;

  constructor(call: SetRefAddressCall) {
    this._call = call;
  }

  get _refaddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRefAddressCall__Outputs {
  _call: SetRefAddressCall;

  constructor(call: SetRefAddressCall) {
    this._call = call;
  }
}

export class SetSafuAddressCall extends ethereum.Call {
  get inputs(): SetSafuAddressCall__Inputs {
    return new SetSafuAddressCall__Inputs(this);
  }

  get outputs(): SetSafuAddressCall__Outputs {
    return new SetSafuAddressCall__Outputs(this);
  }
}

export class SetSafuAddressCall__Inputs {
  _call: SetSafuAddressCall;

  constructor(call: SetSafuAddressCall) {
    this._call = call;
  }

  get _safuaddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSafuAddressCall__Outputs {
  _call: SetSafuAddressCall;

  constructor(call: SetSafuAddressCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateBswPerBlockCall extends ethereum.Call {
  get inputs(): UpdateBswPerBlockCall__Inputs {
    return new UpdateBswPerBlockCall__Inputs(this);
  }

  get outputs(): UpdateBswPerBlockCall__Outputs {
    return new UpdateBswPerBlockCall__Outputs(this);
  }
}

export class UpdateBswPerBlockCall__Inputs {
  _call: UpdateBswPerBlockCall;

  constructor(call: UpdateBswPerBlockCall) {
    this._call = call;
  }

  get newAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateBswPerBlockCall__Outputs {
  _call: UpdateBswPerBlockCall;

  constructor(call: UpdateBswPerBlockCall) {
    this._call = call;
  }
}

export class UpdateMultiplierCall extends ethereum.Call {
  get inputs(): UpdateMultiplierCall__Inputs {
    return new UpdateMultiplierCall__Inputs(this);
  }

  get outputs(): UpdateMultiplierCall__Outputs {
    return new UpdateMultiplierCall__Outputs(this);
  }
}

export class UpdateMultiplierCall__Inputs {
  _call: UpdateMultiplierCall;

  constructor(call: UpdateMultiplierCall) {
    this._call = call;
  }

  get multiplierNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMultiplierCall__Outputs {
  _call: UpdateMultiplierCall;

  constructor(call: UpdateMultiplierCall) {
    this._call = call;
  }
}

export class UpdatePoolCall extends ethereum.Call {
  get inputs(): UpdatePoolCall__Inputs {
    return new UpdatePoolCall__Inputs(this);
  }

  get outputs(): UpdatePoolCall__Outputs {
    return new UpdatePoolCall__Outputs(this);
  }
}

export class UpdatePoolCall__Inputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePoolCall__Outputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawDevAndRefFeeCall extends ethereum.Call {
  get inputs(): WithdrawDevAndRefFeeCall__Inputs {
    return new WithdrawDevAndRefFeeCall__Inputs(this);
  }

  get outputs(): WithdrawDevAndRefFeeCall__Outputs {
    return new WithdrawDevAndRefFeeCall__Outputs(this);
  }
}

export class WithdrawDevAndRefFeeCall__Inputs {
  _call: WithdrawDevAndRefFeeCall;

  constructor(call: WithdrawDevAndRefFeeCall) {
    this._call = call;
  }
}

export class WithdrawDevAndRefFeeCall__Outputs {
  _call: WithdrawDevAndRefFeeCall;

  constructor(call: WithdrawDevAndRefFeeCall) {
    this._call = call;
  }
}