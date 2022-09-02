trigger userTrigger on User (before insert) {
    assignPermissionsHandler.assignPermissionsMethod(Trigger.New);
}