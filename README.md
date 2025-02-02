#### **1- Nodemodules Directory:**
When you add a new library it will automatically be installed in this folder.
Sometimes , in the case where you have issues when installing a new library , it does not pop up for example 
so the solution is:

  a/ to clean this directory 

  b/ or to remove it and **run npm install**

#### **2- App-module.ts:** is the main module
#### **3- App-component.ts**
It is also the default component of the app also called root component

##### **4- A component** consists of four main files, each serving a specific role under **_/src/app_**
###### app-component.html  →   Defines the component's template (UI structure).
###### app-component.scss  →   Contains the component's styles (CSS/SCSS for styling).
###### app-component.spec.ts  → Handles unit testing for the component.
###### app-component.ts  →  Defines the component's logic, including TypeScript code and metadata.

while working on a form using ngModule i encountered an error when i inspect:


````
ERROR RuntimeError: NG01352: If ngModel is used within a form tag, either the name attribute must be set or the form
control must be defined as 'standalone' in ngModelOptions.

Example 1: <input [(ngModel)]="person.firstName" name="first">
Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">
`````

```
<form>
  <input [(ngModel)]="name" name="name">  <!-- ✅ Fix: Add name attribute -->
  {{ name }}
</form>
````
OR if the form tag if it is not needed you can eliminate it but it is not recommended always keep your work organized

