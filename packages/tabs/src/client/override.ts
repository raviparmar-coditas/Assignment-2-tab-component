import {OrxeHook,Hooks} from "@orxe-sdk/hooks";

@OrxeHook({​​​​​​​​
 selector: "orxe-tabs",
 method: "changeTab",
 executeOriginal: false,
}​​​​​​​​)
export class OverrideTabs implements Hooks {​​​​​​​​
 before() {​​​​​​​​
 console.log("before results override");
 return new Promise<any>((resolve) => {​​​​​​​​
 setTimeout(() => {​​​​​​​​
 resolve(null);
 }​​​​​​​​, 2000);
 }​​​​​​​​);
 }​​​​​​​​
 override() {​​​​​​​​
 return [{​​​​​​​​ a: 1 }​​​​​​​​];
 }​​​​​​​​
 after(): void {​​​​​​​​
 console.log("after results override");
 // throw new Error("Method not implemented.");
 }​​​​​​​​
}​​​​​​​​


