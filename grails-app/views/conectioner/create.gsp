<%--
  Created by IntelliJ IDEA.
  User: tobias
  Date: 30/4/20
  Time: 23:17
--%>

%{--<%@ page contentType="text/html;charset=UTF-8" %>--}%
%{--Include Main Layout--}%
<meta name="layout" content="main"/>
<v-container class="my-2">
    <v-row justify="center">
        <v-col>
            <h1 class="headline">Create your Conectioner Account</h1>
        </v-col>
    </v-row>
</v-container>
        <g:form controller="conectioner" action="save" enctype="multipart/form-data">

        %{--Partial Templating--}%
            <g:render template="form"/>
            <v-container class="ma-1 pa-1" fluid>
                <v-row align="center" justify="center" >
                    <v-col cols="2">
                        <v-btn color="#2E3047" class="white--text" type="submit" width="200" name="save" value="${g.message(code: "save")}">
                            Register
                        </v-btn>
                    </v-col>
                    <v-col cols="2">
                        <v-btn color="red" class="white--text"  width="200" href="/" >
                            <g:message code="cancel"/>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </g:form>
