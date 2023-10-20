// [PrintTSCode]
// [PrintTSComments]
/*
 * ENetUC_Event_Manager.ts
 * "UC-Server-Access-Protocol-Event-Manager" ASN.1 stubs.
 * This file was generated by estos esnacc (V5.0.23, 20.10.2023)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
// [PrintTSImports]
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSRootTypes]
export const moduleName = "ENetUC_Event_Manager";

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnCreateFancyEventsArgument {
	public constructor(that: AsnCreateFancyEventsArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnCreateFancyEventsArgument {
		return new AsnCreateFancyEventsArgument({
			iEventDelay: 0,
			iEventCount: 0
		});
	}

	public static type = "AsnCreateFancyEventsArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnCreateFancyEventsArgument",
			...params,
			value: [
				new asn1ts.Integer({ name: "iEventDelay" }),
				new asn1ts.Integer({ name: "iEventCount" })
			]
		});
	}

	public iEventDelay!: number;
	public iEventCount!: number;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnCreateFancyEventsResult {
	public constructor(that?: AsnCreateFancyEventsResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnCreateFancyEventsResult {
		return new AsnCreateFancyEventsResult();
	}

	public static type = "AsnCreateFancyEventsResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnCreateFancyEventsResult",
			...params,
			value: [

			]
		});
	}

}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnFancyEventArgument {
	public constructor(that: AsnFancyEventArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnFancyEventArgument {
		return new AsnFancyEventArgument({
			iEventCounter: 0,
			iEventsLeft: 0
		});
	}

	public static type = "AsnFancyEventArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnFancyEventArgument",
			...params,
			value: [
				new asn1ts.Integer({ name: "iEventCounter" }),
				new asn1ts.Integer({ name: "iEventsLeft" })
			]
		});
	}

	public iEventCounter!: number;
	public iEventsLeft!: number;
}
