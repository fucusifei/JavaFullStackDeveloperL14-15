import React, {useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Button, TableBody, TableCell, TableRow, TextField} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from "react-redux";
import {fetchItemById, createItem, changeItem} from "../../../app/actions/list";
import * as PAGES from "../../../constants/pages";
const getClasses = makeStyles(() => ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20

    },
}));
const getClasses2 = makeStyles(() => ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20

    },
}));

const EditAddList = ({
               }) => {
    const {id} = useParams();
    const classes = getClasses();
    const classes2 = getClasses2();
    const availableItem = useSelector( state => state);
    const dispatch = useDispatch();
    const newValue = availableItem.animalById.itemById;
    useEffect(() => {
        dispatch(fetchItemById(id));
    }, [dispatch]);
    console.log(id)
    return (
        <div>
            <div className={classes.container}>
                {availableItem.animalById.itemById.map((row) => (
                    <TableRow key={row.id}>
                        <TextField
                            disabled
                            id="filled-textarea"
                            label="id"
                            multiline
                            value={row.id}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="name"
                            multiline
                            defaultValue={row.name}
                            onChange={(e) => newValue[0].name = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="kind of animal"
                            multiline
                            defaultValue={row.kindOfAnimal}
                            onChange={(e) => newValue[0].kindOfAnimal = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="gender"
                            multiline
                            defaultValue={row.gender}
                            onChange={(e) => newValue[0].gender = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="age"
                            multiline
                            defaultValue={row.age}
                            onChange={(e) => newValue[0].age = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="height"
                            multiline
                            defaultValue={row.height}
                            onChange={(e) => newValue[0].height = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="length"
                            multiline
                            defaultValue={row.length}
                            onChange={(e) => newValue[0].length = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="weight"
                            multiline
                            defaultValue={row.weight}
                            onChange={(e) => newValue[0].weight = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="issue date"
                            multiline
                            defaultValue={row.issueDate}
                            onChange={(e) => newValue[0].issueDate = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="receiving date"
                            multiline
                            defaultValue={row.receivingDate}
                            onChange={(e) => newValue[0].receivingDate = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                        <TextField
                            id="filled-textarea"
                            label="person that sheltered"
                            multiline
                            defaultValue={row.personThatSheltered}
                            onChange={(e) => newValue[0].personThatSheltered = e.target.value}
                            variant="filled"
                            style={{marginRight: 2}}
                        />
                    </TableRow>
                ))}
            </div>
            <div className={classes2.container}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={()=>{
                         if ( id === "0") {
                             createItem(newValue[0]);
                         }
                         else {
                             changeItem(newValue[0],id);
                         }

                    }}
                    href={`/${PAGES.VIEW_LIST}`}
                    >save
                    </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    href={`/${PAGES.VIEW_LIST}`}>Back</Button>
            </div>
        </div>
    )
};

export default EditAddList;
