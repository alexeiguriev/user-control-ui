import React, {useState} from 'react'
import Form from "../../layouts/Form"
import { Grid } from '@material-ui/core'
//import {Button, Input, Select} from "../../controls"
import {Input} from "../../controls"
import { AirlineSeatIndividualSuiteSharp } from '@material-ui/icons'
import { useForm } from '../../hooks/useForm'

const getFreshModelObject = () =>
({
    firsName : "Alexei",
    lastName : "Guriev",
    emailAddress : "alexeigiriev1@gmail.com",
    password : "testPassword",
})
export default function UserForm() {
   const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls
    } = useForm(getFreshModelObject)
    return (
        <Form>
            <Grid container>
                <Grid item xs = {6}>
                    <Input
                        // disable
                        label = "FirstName"
                        name = "FirstName"
                        value = {values.firsName}
                    />
                    <Input
                        // disable
                        label = "LastName"
                        name = "LastName"
                        value = {values.lastName}
                    />
                    <Input
                        // disable
                        label = "EmailAddress"
                        name = "EmailAddress"
                        value = {values.emailAddress}
                    />
                    <Input
                        // disable
                        label = "Password"
                        name = "Password"
                        value = {values.password}
                    />
                    
                </Grid>
                <Grid item xs = {6}>
                </Grid>
                <Grid item xs = {6}>
                </Grid>
                <Grid item xs = {6}>
                </Grid>
                <Grid item xs = {6}>
                    
                </Grid>
            </Grid>
        </Form>
    )
}
