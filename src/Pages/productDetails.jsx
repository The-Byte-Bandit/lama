// import {useCallback, useEffect, useState} from 'react';
// import Textarea from '@mui/joy/Textarea';
// import PropTypes from 'prop-types';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { typography } from '../style';
// import { tooltip, whiteArrowRight, secondArrowLeft, secondWhiteAddIcon, uploadCloud } from '../constants/constant';
// import Tooltip from '@mui/material/Tooltip';
// import {useDropzone} from 'react-dropzone'

// const ProductDetails = ({currentStep, totalSteps, handleNext, handleBack}) => {
//   const validationSchema = Yup.object({

//     productName: Yup.string()
//     .min(2, 'Product name must be at least 2 characters.')
//     .max(100, 'Product name must be less than 100 characters.')
//     .required('Product name is required'),
  
//     productDescription: Yup.string()
//     .min(5, 'Product description must be at least 5 characters.')
//     .max(200, 'Product description must be less than 100 characters.')
//     ,
  
//     productCategory: Yup.string()
//     .min(5, 'Product category must be at least 5 characters.')
//     .max(100, 'Product category must be less than 100 characters.')
//     .required('Product category is required')
//     ,
//   });
  


//   const [num, setNum] = useState('');
//   const limitChar = 200;
//   const handleChange = (e) => {
//     if (e.target.value.toString().length <= limitChar) {
//       setNum(e.target.value);
//     }
//   };



//   //////////////////////Drop-zone////////////////////////////////////
//   const maxFileSize = 52428800
//   const minfilesize = 0
//   // let disabled = false

//   const [images, setImages] = useState([])
//   const [rejectedFiles, setRejectedFiles] = useState([])


//   const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
//     console.log("File accepted: ", acceptedFiles);
//     console.log("Rejected files: ", rejectedFiles);

    

//     if (rejectedFiles.length > 0) {
//       const isFileTooLarge = rejectedFiles[0].size > maxFileSize;
//       setRejectedFiles(rejectedFiles)
      
//       if (isFileTooLarge) {
//         alert('File size exceeds the maximum limit of 50 MB.');
//         return;
//       }
//     }



//   //   acceptedFiles.forEach(file => {

      

//   //   // let fileReader = new FileReader();
    
//   //   // fileReader.onloadend = ()=>{
//   //   //     alert(`Uploaded successfully.`);
//   //   // }
//   //     setImages(prevValue =>
//   //       [...prevValue, file]
//   //     )
//   //     // fileReader.readAsDataURL(file);

      
//   //   });
    
//   // }, []);
//   // if(acceptedFiles){
//   //   const testLength = images.length + acceptedFiles.length 
//   //   if(testLength < 10)
//   // }


//   acceptedFiles.forEach((file) => {

//     if(images.length<=9){
//       console.log(images.length);
      
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImages((prevImages) => [...prevImages, reader.result]); // Update images state with image URLs
//       };
//       console.log("ggggggg", images.length);
//       reader.readAsDataURL(file);
//       setRejectedFiles('')
//       console.log(images.length);
//     }


//   });
// },
// [maxFileSize] 
// );

//   // useEffect(()=>{
//   //   console.log(images);
//   // },[images])


//   useEffect(() => {

//     // console.log(images.length);
//     // if (images.length === 10){
//     //   disabled = true
//     // } else{
//     //   disabled = false
//     // }

//     // while(images.length > 10){
//       // images.pop()
//       // console.log('pop');
//       console.log(images.length);
//     // }
//   }, [images])
  

//   const fileErrorMessage = (error) => {
//     if (error.code === 'file-invalid-type') {
//       return error.message;
//     } else if (error.code === 'file-too-large') {
//       return 'File size exceeds the maximum limit of 50 MB.'; // Customize message
//     } else if(error.code==='too-many-files'){
//       return (`${error.message}, files cannot exceed 10`);
//     }
//      else {
//       return 'An error occurred.'; // Default message
//     }
//   };


  

//   const {getRootProps, isDragActive} = useDropzone({onDrop, accept: {
//     'image/png': ['.png'],
//     'image/jpeg': ['.jpg'],
//   },
//   minSize: minfilesize,
//   maxSize: maxFileSize,
//   maxFiles:10 ,
//   disabled: images.length >= 10,
//   init: function() {
//     this.on("maxfilesexceeded", function() {
//       // if (this.files[1]!=null){
//       //   this.removeFile(this.files[1]);
//       // }
//       console.log('too much');
//     });
//   },
// })


//   return (
//     <div className='md:w-[605px] md:h-[528px] flex flex-1 gap-[4px]'>
//       <Formik
//         initialValues={{
//           productName: '',
//           productDescription: '',
//           productCategory: '',
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             handleNext()
//             console.log(values)
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ values, setFieldValue, isSubmitting }) => (
//           <Form className='flex flex-col flex-1 gap-[16px]'>
//             <label htmlFor='Product name' className='flex flex-col flex-1'>
//               <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1 `}>
//                 Product name{' '}
//                 {/* <span className={`${typography.paragraphSmall} text-text-sub-500 `}>(Naira)</span> */}
//                 <Tooltip title="Product name" placement="top-start">
//                 <span><img src={tooltip} alt='tooTip'/>  </span>
//                 </Tooltip>
//               </h5>
//               <Field
//                 className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
//                 name='productName'
//                 placeholder='Enter name here '
//               />
//               <ErrorMessage name='productName' component='p' className='text-[11px] text-[#DC143C] '/>
//             </label>
//             <label htmlFor='Product description' className='flex flex-col flex-1'>
//               <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
//                 Product description{' '}
//                 <span className={`${typography.paragraphSmall} text-text-sub-500`}>(Optional)</span>
//                 <Tooltip title="Product description" placement="top-start">
//                 <span><img src={tooltip} alt='tooTip'/>  </span>
//                 </Tooltip>
//               </h5>
//               <div className='relative bg-bg-white-0  '>
//               <Textarea
//               name ='productDescription'
//                 minRows={4}
//                 size="lg"
//                 variant="outlined"
//                 onChange={(e) => {setFieldValue('productDescription', e.target.value)
//                   handleChange(e)
//                   console.log(values)}}
                  
//                 // defaultValue={num}
//                 value={num}
//                 placeholder='Enter product description here '
//                 style={{ fontFamily: 'Arial', fontSize: '14px', backgroundColor: '#FFFFFF'}}
//                 // inputProps={{ maxLength: 20 }}
//               />
//               <span className='absolute bottom-1 right-[4px]'>
//                 <h5 className={`${typography.subheading2XSmall} text-iconSoft400`}>
//                   {num.length > 0 ? `${num.length}/${limitChar}` : `0/${limitChar}`}
//                 </h5>
//               </span>

//               </div>
//               <ErrorMessage name='productDescription' component='p' className='text-[11px] text-[#DC143C] ' />
//             </label>
//             <label htmlFor='Product Category' className='flex flex-col flex-1'>
//               <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row items-center gap-1`}>
//                 Product Category{' '}
//                 <Tooltip title="Product Category" placement="top-start">
//                 <span><img src={tooltip} alt='tooTip'/>  </span>
//                 </Tooltip>
//               </h5>
//               <Field
//                 className='bg-bg-white-0 rounded-[10px] border-[1px] p-[10px] border-stroke-soft-200 focus-visible:outline-[#ccc] focus-visible:outline-[1px]'
//                 name='productCategory'
//                 placeholder='Enter direct product categories (Fashion, Beauty, Clothes, etc)'
//               />
//               <ErrorMessage name='productCategory' component='p' className='text-[11px] text-[#DC143C] ' />
//             </label>
//             <label  htmlFor='Upload Product' className='flex flex-col flex-1 gap-[8px]' >
//               <div className='w-[605px] h-[208px]'>
//                 <div className='w-[100%] h-[100%] p-[32px] gap-[20px] flex flex-col items-center flex-1 rounded-[12px] bg-text-white-0 border-[1px] border-stroke-soft-300 ' {...getRootProps()} >
//                   <div>
//                     <img src={uploadCloud} alt='upload'/>
//                   </div>
//                   <div className='text-center '>
//                     {!isDragActive && <h5 className={`${typography.labelSmall} text-text-main-900`} >Choose a file or drag & drop it here.</h5> }
//                     {isDragActive && <h5 className={`${typography.labelSmall} text-text-main-900`} >Drag Active.</h5> }
                    
//                     <p className={`${typography.paragraphSmall} text-text-sub-500 text-[11px] `} >JPEG, PNG formats, up to 50 MB.</p>
//                   </div>
//                   <div>
//                   <button  className={`${typography.labelSmall} border-stroke-soft-200 border-[1px] flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-bg-white-0 rounded-[10px] h-[38px] w-[116px] text-text-sub-500 `}>
//                     <span>Browse File </span>
//                   </button> 
//                   </div>
//                 </div>
//               </div>
//               <div className='flex flex-col flex-wrap gap-[8px] '>
//                 {rejectedFiles.length > 0 && <div>
//                   {rejectedFiles[rejectedFiles.length-1].errors.map((error, index)=>(

//                     <p key={index} className='text-[#DC143C] text-[11px] ' >{fileErrorMessage(error)}</p>
                    
//                   ))}
//                   {images.length > 10 && <p className='text-[#DC143C] text-[11px] ' >images cannot exceed 10 in number</p> }
                
//                  </div>  }
//                 {/* {images.length > 0 && (
//                   <div className='flex flex-wrap gap-[4px]'>
//                       {images.map((image, index) => (
//                         <img key={index} src={image} alt={`Product Image ${index + 1}`} className='w-[50px] h-[50px] border-stroke-soft-200 border-[1px] object-cover rounded-[4px]' />
//                       ))}
//                   </div>
//                 )} */}


//                 {images.length > 0 && (
//   <div className='flex flex-wrap gap-[4px]'>
//     {images.map((image, index) => (
//       <div key={index} className='w-[50px] h-[50px] relative group'>
//         <img
//           src={image}
//           alt={`Product Image ${index + 1}`}
//           className='w-full h-full object-cover rounded-[4px] border-stroke-soft-200 border-[1px] group-hover:opacity-75 transition duration-300 ease-in-out'
//         />
//         {/* Optional Delete Button (consider adding functionality) */}
//         {/* <span className='bg-[#DC143C] text-text-white-0 absolute top-0 right-0 p-1 rounded-full group-hover:opacity-100 transition duration-300 ease-in-out'>
//           x
//         </span> */}
//       </div>
//     ))}
//   </div>
// )}

//               </div>
              
//             </label>
//             <div className="navigation flex flex-row py-[8px] ">
//         {currentStep > 1 && 
//             <button onClick={handleBack} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] bg-bg-white-0 border-stroke-soft-200 border-[1px] rounded-[10px] h-[38px] w-[80px] text-text-sub-500 `}>
//             <span><img src={secondArrowLeft} className='w-[100%] ' alt='arrow'/> </span> Back
//             </button>}
            
//         {currentStep < totalSteps ? 
//         <button  disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[80px] text-text-white-0 `}>
//         Next <span><img src={whiteArrowRight} className='w-[100%] ' alt='arrow'/> </span>
//         </button> : 
//         <button onClick={handleNext} disabled={isSubmitting} className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-primary-purple-700 rounded-[10px] h-[38px] w-[156px] text-text-white-0 `}>
//         <span><img src={secondWhiteAddIcon} className='w-[100%] ' alt='arrow'/> </span>
//         Publish product</button> 
//         }
//       </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };


// ProductDetails.propTypes = {
//   currentStep: PropTypes.number.isRequired,
//   totalSteps: PropTypes.number.isRequired,
//   handleNext: PropTypes.func.isRequired,
//   handleBack: PropTypes.func.isRequired,
// };


// export default ProductDetails;


import { useState, useRef, useEffect, useCallback } from 'react';
import Textarea from '@mui/joy/Textarea';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { typography } from '../style';
import { tooltip, whiteArrowRight, secondArrowLeft, secondWhiteAddIcon, uploadCloud } from '../constants/constant';
import Tooltip from '@mui/material/Tooltip';
import { useDropzone } from 'react-dropzone';

const ProductDetails = ({ currentStep, totalSteps, handleNext, handleBack }) => {
  const validationSchema = Yup.object({
    productName: Yup.string()
      .min(2, 'Product name must be at least 2 characters.')
      .max(100, 'Product name must be less than 100 characters.')
      .required('Product name is required'),

    productDescription: Yup.string()
      .min(5, 'Product description must be at least 5 characters.')
      .max(200, 'Product description must be less than 200 characters.'),

    productCategory: Yup.string()
      .min(5, 'Product category must be at least 5 characters.')
      .max(100, 'Product category must be less than 100 characters.')
      .required('Product category is required'),
  });

  const limitChar = 200;
  const [num, setNum] = useState('');
  const handleChange = (e) => {
    if (e.target.value.length <= limitChar) {
      setNum(e.target.value);
    }
  };

  ////////////////////// Drop-zone ////////////////////////////////////
  const maxFileSize = 52428800; // 50 MB
  const [images, setImages] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      setRejectedFiles(rejectedFiles);
      const isFileTooLarge = rejectedFiles[0].size > maxFileSize;
      if (isFileTooLarge) {
        alert('File size exceeds the maximum limit of 50 MB.');
        return;
      }
    }

    acceptedFiles.forEach((file) => {
      if (images.length < 10) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages((prevImages) => [...prevImages, reader.result]);
        };
        reader.readAsDataURL(file);
      }
    });
  }, [images]);

  const fileErrorMessage = (error) => {
    if (error.code === 'file-invalid-type') return error.message;
    if (error.code === 'file-too-large') return 'File size exceeds the maximum limit of 50 MB.';
    if (error.code === 'too-many-files') return `${error.message}, files cannot exceed 10.`;
    return 'An error occurred.';
  };

  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    maxSize: maxFileSize,
    maxFiles: 10,
    disabled: images.length >= 10,
  });

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className='w-full md:w-[605px] flex flex-col gap-4 p-6 md:p-0'>
      <Formik
        initialValues={{
          productName: '',
          productDescription: '',
          productCategory: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            handleNext();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className='flex flex-col gap-4'>
            <label htmlFor='productName' className='flex flex-col'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex flex-row  items-center gap-1`}>
                Product Name
                <Tooltip title="Enter the product's name" placement='top-start'>
                  <img src={tooltip} alt='tooltip' />
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-lg border p-2 border-stroke-soft-200 focus:outline-primary-purple-700'
                name='productName'
                placeholder='Enter name here'
              />
              <ErrorMessage name='productName' component='p' className='text-sm text-red-500' />
            </label>

            <label htmlFor='productDescription' className='flex flex-col'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex items-center gap-1`}>
                Product Description
                <span className='text-text-sub-500'>(Optional)</span>
                <Tooltip title="Provide a brief description" placement='top-start'>
                  <img src={tooltip} alt='tooltip' />
                </Tooltip>
              </h5>
              <Textarea
                name='productDescription'
                minRows={4}
                size='lg'
                variant='outlined'
                value={num}
                onChange={(e) => {
                  setFieldValue('productDescription', e.target.value);
                  handleChange(e);
                }}
                placeholder='Enter product description here'
                className='text-[5px]'
              />
              <div className='text-right md:text-xs text-iconSoft400'>{`${num.length}/${limitChar}`}</div>
              <ErrorMessage name='productDescription' component='p' className='text-sm text-red-500' />
            </label>

            <label htmlFor='productCategory' className='flex flex-col'>
              <h5 className={`${typography.labelSmall} text-text-main-900 flex items-center gap-1`}>
                Product Category
                <Tooltip title="Specify product categories (e.g., Fashion, Beauty)" placement='top-start'>
                  <img src={tooltip} alt='tooltip' />
                </Tooltip>
              </h5>
              <Field
                className='bg-bg-white-0 rounded-lg border p-2 border-stroke-soft-200 focus:outline-primary-purple-700'
                name='productCategory'
                placeholder='Enter categories'
              />
              <ErrorMessage name='productCategory' component='p' className='text-sm text-red-500' />
            </label>

            <label htmlFor='uploadProduct' className='flex flex-col gap-2'>
              <div
                className='w-full h-[208px] p-8 border rounded-lg flex flex-col items-center justify-center bg-text-white-0 border-stroke-soft-300'
                {...getRootProps()}
              >
                <img src={uploadCloud} alt='upload' />
                <h5 className='text-text-main-900'>{isDragActive ? 'Drop your files here' : 'Choose or drag files here'}</h5>
                <p className='text-sm text-text-sub-500'>JPEG, PNG formats, up to 50 MB.</p>
              </div>

              {rejectedFiles.length > 0 && (
                <div className='text-sm text-red-500'>
                  {rejectedFiles[0].errors.map((error, index) => (
                    <p key={index}>{fileErrorMessage(error)}</p>
                  ))}
                </div>
              )}

              <div className='flex flex-wrap gap-4 mt-4'>
                {images.map((image, index) => (
                  <div key={index} className='relative'>
                    <img
                      src={image}
                      alt={`Product ${index}`}
                      className='w-16 h-16 object-cover rounded-md border border-stroke-soft-200'
                    />
                    <button
                      type='button'
                      className='absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1'
                      onClick={() => removeImage(index)}
                      aria-label='Remove image'
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </label>

            <div className='flex justify-between mt-4'>
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className='flex items-center px-4 py-2 bg-white border rounded-md text-text-sub-500'
                >
                  <img src={secondArrowLeft} alt='Back' className='mr-2' />
                  Back
                </button>
              )}
              <button
                type='submit'
                disabled={isSubmitting}
                className='flex items-center px-4 py-2 bg-primary-purple-700 text-white rounded-md'
              >
                {currentStep < totalSteps ? 'Next' : 'Publish Product'}
                <img
                  src={currentStep < totalSteps ? whiteArrowRight : secondWhiteAddIcon}
                  alt='Next'
                  className='ml-2'
                />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ProductDetails.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default ProductDetails;
