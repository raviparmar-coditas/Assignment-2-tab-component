# orxe-tabs

A tab component in ORXe show tab view.

## Usage

### Angular / javascript

```html
<!-- Default -->
 <orxe-tabs>
  </orxe-tabs>

<!-- without icon -->
   tabsData = [
      {label:"Label 1",id:"Lable1"},
      {label:"Label 2",id:"Lable2"},
      {label:"Label 3",id:"Lable3"}
    ]

 <orxe-tabs .tabs=${tabsData}>
  </orxe-tabs>


<!-- with icon -->
   tabsData = [
      {label:"Hotel",id:"Lable1",icon:"ic-hotel"},
      {label:"Car",id:"Lable2",icon:"ic-car"},
      {label:"Flights",id:"Lable3",icon:"ic-flight"}
    ]

 <orxe-tabs .tabs=${tabsData}>
  </orxe-tabs>

```

### Event

Whenever the value of tabs is clicked, it fires a custom event named "tabEvent".
You can attach an event listener on the component to get the actual value of tabs clicked

```js
const myElement = document.querySelector('orxe-tab');
  myElement.addEventListener('tabEvent', (e) => {
    console.log(e.detail)
  });
  
```  


## Attributes

| Attribute | Description              | Type   |
| --------- | ------------------------ | ------ |
| tabs      | array of tabs objects    | array  | 
 
