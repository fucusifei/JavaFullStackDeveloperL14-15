import React, {useEffect, useState} from 'react';
import
{fetchList, deleteList}
 from 'app/actions/list';
import {useDispatch, useSelector} from "react-redux";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles} from "@material-ui/core/styles";
import * as PAGES from "../../../constants/pages";

const getClasses = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: '200%',
    },
}));
const ViewList = () => {

    const classes = getClasses();
    const availableItems = useSelector( state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    return (
        <div className={classes.container}>
            <div>
                <Button variant="contained"
                        color="primary"
                        size="large"
                        href={`/${PAGES.EDIT_ADD_LIST}/${0}`}
                        style={{marginLeft:-120,
                                marginTop:10}}>add</Button>
            </div>
            <div>
                <TableContainer >
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Kind of animal</TableCell>
                                <TableCell align="center">Gender</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">Height</TableCell>
                                <TableCell align="center">Length</TableCell>
                                <TableCell align="center">Weight</TableCell>
                                <TableCell align="center">Issue date</TableCell>
                                <TableCell align="center">Receiving date</TableCell>
                                <TableCell align="center">Person that sheltered</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {availableItems.animal.viewList.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.kindOfAnimal}</TableCell>
                                    <TableCell align="center">{row.gender}</TableCell>
                                    <TableCell align="center">{row.age}</TableCell>
                                    <TableCell align="center">{row.height}</TableCell>
                                    <TableCell align="center">{row.length}</TableCell>
                                    <TableCell align="center">{row.weight}</TableCell>
                                    <TableCell align="center">{row.issueDate}</TableCell>
                                    <TableCell align="center">{row.receivingDate}</TableCell>
                                    <TableCell align="center">{row.personThatSheltered}</TableCell>
                                    <Button  variant="contained"
                                             color="default"
                                             startIcon={<CloudUploadIcon />}
                                             href={`/${PAGES.EDIT_ADD_LIST}/${row.id}`}
                                             style={{width:115}}>edit</Button>
                                    <Button  variant="contained"
                                             color="secondary"
                                             startIcon={<DeleteIcon />}
                                             onClick={()=>{
                                                 deleteList(row.id);
                                             }}
                                             href={`/${PAGES.VIEW_LIST}`}
                                             >delete</Button>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
};


export default ViewList;
