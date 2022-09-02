public without sharing class assignPermissionsHandler{
    public static void assignPermissionsMethod(List<User> userList){
        
        map<Id, Profile> profileMap = new map<Id, Profile>([Select Id, Name from Profile]);
        List<PermissionSetAssignment> insertList = new List<PermissionSetAssignment>();
        
        for(User usr : userList){                
            if(!profileMap.containsKey(usr.ProfileId))
                system.debug('The mappings are not found');
            else{
                Profile_Permission__mdt r = Profile_Permission__mdt.getInstance(profileMap.get(usr.ProfileId).Name);
                String val = r.Permissions__c;
                for(String permission : val.split(';') ){
                    PermissionSetAssignment pa = new PermissionSetAssignment(PermissionSetId = permission, AssigneeId = usr.Id);
                    insertList.add(pa);
                }
            }   
        }
        
        if(insertList.size()>0){
            insert insertList;
        }
        
        
    }
}
