
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
import { deleteproduct, postproduct, productdata, singleproductdata, updateproduct } from '../../Redux/Action/Product.action';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { height } from '@mui/system';
import { Box, FormControl, InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export const Admin = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [Update, setUpdate] = useState();
    const dispatch = useDispatch();
    const [uid, setUid] = useState()
    const product = useSelector((state) => state.Product);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let product1 = {
        product_name: yup.string().required("enter name"),
        category: yup.string().required("please enter designation"),
        company_name: yup.string().required("please enter salary"),
        price: yup.string().required("please enter salary"),
        model_no: yup.string().required("please enter salary"),
        description: yup.string().required("please enter salary"),
        file: yup.mixed().required("please select file"),
    };

    let schema = yup.object().shape(product1);

    //for  initial value
    const formik = useFormik({
        initialValues: {
            product_name: "",
            category: "",
            company_name: "",
            price: "",
            model_no: "",
            description: "",
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
        dispatch(postproduct(value));
        console.log("fkdshkfgds", value);
        setOpen(false);
        loadData();
    };

    // for deletion
    const handleDelete = (id) => {
        dispatch(deleteproduct(id));
        // loadData();
    };

    //for data update and dialog box close and new data set
    const handleUpdateData = (value) => {
        dispatch(updateproduct(value));
        setOpen(false);
        setUpdate();
        // loadData();
    };


    const handlesingleshowdata =(id)=> {
dispatch(singleproductdata(id));
    }





    const mystyle = {
        width: "50px",
        height: "50px",
        borderRadius: "50%"


    }



    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "product_name", headerName: "Product Name", width: 130 },
        { field: "category", headerName: "Category", width: 130 },
        { field: "company_name", headerName: "Company Name", width: 110 },
        { field: "price", headerName: "Price", width: 90 },
        { field: "model_no", headerName: " Model No", width: 130 },
        { field: "description", headerName: "Description", width: 130 },
        {
            field: 'url', headerName: 'Image', width: 80,
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
                    <Button
                        onClick={() => handlesingleshowdata(params.row)}
                        endIcon={<EditIcon />}>
                    </Button>
                    
                 
                </>
            ),
        },

    ];






    const loadData = () => {
        console.time();
        console.log('data2', product);
        setData(product.Product);
        console.timeEnd()
    };

    useEffect(() => {
        dispatch(productdata());
        console.log("fdsgdfgdf", dispatch(productdata(), product));
        loadData();
    }, []);


    const handleEdit = (params) => {
        setOpen(true);
        setUpdate(true);
        formik.setValues({
            id: params.id,
            product_name: params.row.product_name,
            category: params.row.category,
            company_name: params.row.company_name,
            price: params.row.price,
            model_no: params.row.model_no,
            description: params.row.description,
            file: params.row.url,
            fileName: params.row.fileName
        });
        setUid(params.row.id)
        console.log("deweewewewe", data, params);
    };



    const categorys = [
        {
            value: 'MOBILE',
            label: 'MOBILE',
        },
        {
            value: 'LAPTOP',
            label: 'LAPTOP',
        },
        {
            value: 'HOME APPLIANCES',
            label: 'HOME APPLIANCES',
        },
        {
            value: 'TELIVISION',
            label: 'TELIVISION',
        },
    ];





    return (
        <>
            <h1 className='m-5 p-5'>admin panel</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Product
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Product</DialogTitle>
                    <Formik value={formik}>
                        <Form onSubmit={formik.handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="product_name"
                                    label="product_name"
                                    type="product_name"
                                    fullWidth
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    defaultValue={formik.values.product_name}
                                    helperText={formik.errors.product_name}
                                    error={formik.errors.product_name ? true : false}
                                />
                                {/* <TextField
                                    margin="dense"
                                    id="category"
                                    label="category"
                                    type="category"
                                    fullWidth
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    defaultValue={formik.values.category}
                                    helperText={formik.errors.category}
                                    error={formik.errors.category ? true : false}
                                /> */}
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '100%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            id="category"
                                            select
                                            name='category'
                                            label="Select"
                                            onChange={formik.handleChange}
                                            // onChange={handleChange1}
                                            defaultValue={formik.values.category}
                                            helperText={formik.errors.category}
                                            error={formik.errors.category ? true : false}>
                                            {/* <MenuItem value="select">
                                            </MenuItem> */}
                                            {categorys.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </Box>

                                <TextField
                                    margin="dense"
                                    id="company_name"
                                    label="company_name"
                                    type="company_name"
                                    fullWidth
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    defaultValue={formik.values.company_name}
                                    helperText={formik.errors.company_name}
                                    error={formik.errors.company_name ? true : false}
                                />
                                <TextField
                                    margin="dense"
                                    id="price"
                                    label="price"
                                    type="price"
                                    fullWidth
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    defaultValue={formik.values.price}
                                    helperText={formik.errors.price}
                                    error={formik.errors.price ? true : false}
                                />
                                <TextField
                                    margin="dense"
                                    id="model_no"
                                    label="model_no"
                                    type="model_no"
                                    fullWidth
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    defaultValue={formik.values.model_no}
                                    helperText={formik.errors.model_no}
                                    error={formik.errors.model_no ? true : false}
                                />
                                <TextField
                                    margin="dense"
                                    id="description"
                                    label="description"
                                    type="description"
                                    fullWidth
                                    variant="standard"
                                    onChange={formik.handleChange}
                                    defaultValue={formik.values.description}
                                    helperText={formik.errors.description}
                                    error={formik.errors.description ? true : false}
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
                        rows={product.product}
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
