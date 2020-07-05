package connectify.grailsproject


class ConectionerInterceptor {

    AuthenticationService authenticationService

    int order = 1

    ConectionerInterceptor(){
        // Connectioner
        match(controller: "conectioner", action: "edit")
        match(controller: "conectioner", action: "details") // TODO: Revisar

        // Activity Template
        match(controller: "activityTemplate", action: "create")
        match(controller: "activityTemplate", action: "index")

        // Activity
        match(controller: "conectioner", action: "create")
        match(controller: "conectioner", action: "index")
    }

    boolean before() {
        if(!authenticationService.getUser().isTypeConnectioner()){
            redirect(controller: "authentication", action: "login")
            return false
        }
        return true
    }

}
