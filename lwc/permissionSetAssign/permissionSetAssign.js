import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import handleInsertAndUpdate from '@salesforce/apex/metadataInsertUpdate.handleInsertAndUpdate';
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';

export default class PermissionSetAssign extends LightningElement {
    @track profile;
    @track permissions;

    handleSubmit(event){

        var inp = document.querySelectorAll("lightning-input");

        inp.forEach(function(element){
            if(element.name=="profile")
            this.profile = element.value;
            else if(element.name=="permissions")
            this.permissions = element.value;
        },this);

        // Map<String, Object> or a single mapping
        var object = {'Profile__c': profile, 'Permissions__c': permissions};
        console.log(object);
    
        handleInsertAndUpdate({fullName:'Profile_Permission.'+profile},{label: profile}, {fieldWithValuesMap: object}).then(result=>{
            console.log(JSON.stringify(result));
        }).catch(error=>{
            console.log(error);
        })
      
        //Show toast message
        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Opearion sucessful',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    handleReset(){
        this.template.querySelectorAll('lightning-input').forEach(element => {
            element.value = null;      
          });
    }

}