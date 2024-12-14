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

  const {getRootProps, getInputProps, isDragActive  } = useDropzone({
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
  <input {...getInputProps()} />
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
