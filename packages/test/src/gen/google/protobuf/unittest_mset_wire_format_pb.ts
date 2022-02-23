/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file google/protobuf/unittest_mset_wire_format.proto (package proto2_wireformat_unittest, syntax proto2)

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto2} from "@bufbuild/protobuf";

/**
 * @generated from message proto2_wireformat_unittest.TestMessageSet
 */
export class TestMessageSet extends Message<TestMessageSet> {

    constructor(data?: PartialMessage<TestMessageSet>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "proto2_wireformat_unittest.TestMessageSet";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessageSet {
        return new TestMessageSet().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessageSet {
        return new TestMessageSet().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessageSet {
        return new TestMessageSet().fromJsonString(jsonString, options);
    }

    static equals(a: TestMessageSet | PlainMessage<TestMessageSet> | undefined, b: TestMessageSet | PlainMessage<TestMessageSet> | undefined): boolean {
        return proto2.util.equals(TestMessageSet, a, b);
    }

}


/**
 * @generated from message proto2_wireformat_unittest.TestMessageSetWireFormatContainer
 */
export class TestMessageSetWireFormatContainer extends Message<TestMessageSetWireFormatContainer> {

    /**
     * @generated from field: optional proto2_wireformat_unittest.TestMessageSet message_set = 1;
     */
    messageSet?: TestMessageSet;

    constructor(data?: PartialMessage<TestMessageSetWireFormatContainer>) {
        super();
        proto2.util.initPartial(data, this);
    }

    static readonly runtime = proto2;
    static readonly typeName = "proto2_wireformat_unittest.TestMessageSetWireFormatContainer";
    static readonly fields: FieldList = proto2.util.newFieldList(() => [
        {no: 1, name: "message_set", kind: "message", T: TestMessageSet, opt: true},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMessageSetWireFormatContainer {
        return new TestMessageSetWireFormatContainer().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMessageSetWireFormatContainer {
        return new TestMessageSetWireFormatContainer().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMessageSetWireFormatContainer {
        return new TestMessageSetWireFormatContainer().fromJsonString(jsonString, options);
    }

    static equals(a: TestMessageSetWireFormatContainer | PlainMessage<TestMessageSetWireFormatContainer> | undefined, b: TestMessageSetWireFormatContainer | PlainMessage<TestMessageSetWireFormatContainer> | undefined): boolean {
        return proto2.util.equals(TestMessageSetWireFormatContainer, a, b);
    }

}


