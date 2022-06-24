/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "tolik22869.hackatom.hackatom";

export interface MsgTestmsg {
  creator: string;
  text: string;
}

export interface MsgTestmsgResponse {}

const baseMsgTestmsg: object = { creator: "", text: "" };

export const MsgTestmsg = {
  encode(message: MsgTestmsg, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTestmsg {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTestmsg } as MsgTestmsg;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTestmsg {
    const message = { ...baseMsgTestmsg } as MsgTestmsg;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    return message;
  },

  toJSON(message: MsgTestmsg): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTestmsg>): MsgTestmsg {
    const message = { ...baseMsgTestmsg } as MsgTestmsg;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    return message;
  },
};

const baseMsgTestmsgResponse: object = {};

export const MsgTestmsgResponse = {
  encode(_: MsgTestmsgResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTestmsgResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTestmsgResponse } as MsgTestmsgResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTestmsgResponse {
    const message = { ...baseMsgTestmsgResponse } as MsgTestmsgResponse;
    return message;
  },

  toJSON(_: MsgTestmsgResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTestmsgResponse>): MsgTestmsgResponse {
    const message = { ...baseMsgTestmsgResponse } as MsgTestmsgResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Testmsg(request: MsgTestmsg): Promise<MsgTestmsgResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Testmsg(request: MsgTestmsg): Promise<MsgTestmsgResponse> {
    const data = MsgTestmsg.encode(request).finish();
    const promise = this.rpc.request(
      "tolik22869.hackatom.hackatom.Msg",
      "Testmsg",
      data
    );
    return promise.then((data) => MsgTestmsgResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
