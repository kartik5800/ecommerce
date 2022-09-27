
import React, { useEffect, useState } from 'react'
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { height } from '@mui/system';
import { Box, FormControl, InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { categorydata, deletecategory, postcategory, updatecategory } from '../../Redux/Action/category.action';

export const Admin2 = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [Update, setUpdate] = useState();
    const dispatch = useDispatch();
    const [uid, setUid] = useState()
    const category = useSelector((state) => state.category);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let category1 = {
        category_name: yup.string().required("enter name"),
        file: yup.mixed().required("please select file"),
      

    };

    let schema = yup.object().shape(category1);

    //for  initial value
    const formik = useFormik({
        initialValues: {
            category_name: "",
            file: "",
        },





        validationSchema: schema,
        onSubmit: (value, { resetForm }) => {
            if (Update) {
                handleUpdateData(value);
            } else {
                handleSubmitdata(value);
            }
            resetForm();
        },
    });
    // data submit krva mate
    const handleSubmitdata = (value) => {
        dispatch(postcategory(value));
        console.log("fkdshkfgds", value);
        setOpen(false);
        loadData();
    };

    // for deletion
    const handleDelete = (id) => {
        dispatch(deletecategory(id));
        // loadData();
    };

    //for data update and dialog box close and new data set
    const handleUpdateData = (value) => {
        dispatch(updatecategory(value));
        setOpen(false);
        setUpdate();
        // loadData();
    };


 




    const mystyle = {
        width: "50px",
        height: "50px",
        borderRadius: "50%"


    }



    const columns = [
        { field: "id", headerName: "ID", width: 170 },
        { field: "category_name", headerName: "Category Name", width: 230 },
 
        {
            field: 'url', headerName: 'Image', width: 180,
            renderCell: (params) => (
                <>
                    <img src={params.row.url} style={mystyle} />
                </>
            )
        },
        {
            field: "Action",
            headerName: "Action",
            width: 260,
            renderCell: (params) => (
                <>
                    <Button
                        onClick={() => handleDelete(params.row)}
                        startIcon={<DeleteIcon />}>
                    </Button>
                    <Button
                        onClick={() => handleEdit(params)}
                        endIcon={<EditIcon />}>
                    </Button>

                </>
            ),
        },

    ];






    const loadData = () => {
 
        console.log('data2', category);
        setData(category.category);
   
    };

    useEffect(() => {
        dispatch(categorydata());
        loadData();
    }, []);


    const handleEdit = (params) => {
        setOpen(true);
        setUpdate(true);
        formik.setValues({
            id: params.id,
            category_name: params.row.category_name,
            file: params.row.url,
            fileName: params.row.fileName
        });
        setUid(params.row.id)
        console.log("deweewewewe", data, params);
    };



    return (
        <>
            <h1 className='m-5 p-5'>admin panel</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Category
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Category</DialogTitle>
                    <Formik value={formik}>
                        <Form onSubmit={formik.handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="category_name"
                                    label="category_name"
                                    type="category_name"
                                    fullWidth
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    defaultValue={formik.values.category_name}
                                    helperText={formik.errors.category_name}
                                    error={formik.errors.category_name ? true : false}
                                />
                               
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    onChange={(e) =>
                                        formik.setFieldValue("file", e.target.files[0])
                                    }

                                />
                                <p style={{ color: "red" }}>
                                    {formik.errors.file && formik.errors.file}
                                </p>

                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>


                                    {Update ? (
                                        <Button type="submit">Update</Button>
                                    ) : (
                                        <Button type="submit">Submit</Button>
                                    )}

                                </DialogActions>
                            </DialogContent>

                        </Form>
                    </Formik>
                </Dialog>
            </div>


            <div className='container'>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={category.category}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </div>
            </div>

        </>

    )
}
