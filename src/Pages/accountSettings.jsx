
import styles, {typography} from '../style';
import { closeFillIcon, profileAvatar, edit } from '../constants/constant';


function AccountSettings() {
  return (
    <div className={`${styles.paddingMain} fadein w-full h-full bg-bg-white-0  md:bg-backgroundGrey flex flex-col gap-[60px]`}>
      <div className='w-full  flex flex-col flex-1 gap-[32px]'>
        <div className='flex flex-col-reverse gap-[20px] md:gap-0 md:flex-row flex-1 md:items-center'>
          <h5 className={`${typography.labelLarge} text-text-main-900`}>Personal Details</h5>
          <button type='button' className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-redBase rounded-[10px] h-[38px] max-w-[190px] text-text-white-0 `}>
            <span><img src={closeFillIcon} className='w-[100%] ' alt='arrow'/> </span>
            Deactivate Account
          </button> 
        </div>

        <div className='flex flex-col flex-1 gap-[32px]'>
          <div className='flex flex-col md:flex-row flex-1 gap-[16px] md:gap-0'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>Profile Photo</h5>
              <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Min 400x400px, PNG or JPEG formats.</p>
            </div>

            <div className=''>
              <div className='flex flex-col md:flex-row flex-1 gap-[16px] items-center'>
                <div className=''>
                  <img src={profileAvatar} alt='avatar'/>
                </div>

                <div className='flex flex-1'>
                  <button className={`${typography.labelSmall} btx flex flex-row gap-[12px] items-center justify-center p-[10px] bg-bg-white-0 border-stroke-soft-200 border-[1px] rounded-[10px] h-[38px] max-w-[80px] text-text-sub-500 `}> Upload</button>
                </div>
              </div>
            </div>

          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-row flex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
                <h5 className={`${typography.labelSmall} text-text-main-900`}>Full Name</h5>
                <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Your name will not be visible to your contacts.</p>
              </div>

              <div className=''>
                <div className='border md:hidden border-stroke-soft-200 rounded-full py-[16px] px-[24px]'>
                <p className={`${typography.paragraphXSmall} text-text-main-900`}>Arthur Taylor</p>
                </div>
                <div className='hidden md:flex flex-col flex-1 gap-[4px] '>
                  <div className=''>
                  <p className={`${typography.paragraphXSmall} text-text-main-900`}>Arthur Taylor</p>
                  </div>

                  <div className='hidden md:flex flex-row flex-1'>
                  <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-row flex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
                <h5 className={`${typography.labelSmall} text-text-main-900`}>Email Address</h5>
                <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Business email address recommended.</p>
              </div>

              <div className=''>
                <div className='border md:hidden border-stroke-soft-200 rounded-full py-[16px] px-[24px]'>
                  <p className={`${typography.paragraphXSmall} text-text-main-900`}>arthur@alignui.com</p>
                </div>
                <div className='hidden md:flex flex-col flex-1 gap-[4px] '>
                  <div className=''>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>arthur@alignui.com</p>
                  </div>

                  <div className='flex flex-row flex-1'>
                    <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-row flex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
                <h5 className={`${typography.labelSmall} text-text-main-900`}>Phone Number</h5>
                <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Business phone number recommended.</p>
              </div>

              <div className=''>
                <div className='border md:hidden border-stroke-soft-200 rounded-full py-[16px] px-[24px]'>
                  <p className={`${typography.paragraphXSmall} text-text-main-900`}>+1 (012) 345-6789</p>
                </div>
                <div className='hidden md:flex  flex-col flex-1 gap-[4px] '>
                  <div className=''>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>+1 (012) 345-6789</p>
                  </div>

                  <div className='flex flex-row flex-1'>
                    <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-row flex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
                <h5 className={`${typography.labelSmall} text-text-main-900`}>Legal Address</h5>
                <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Legal residential address for billing details.</p>
              </div>

              <div className=''>
                <div className='border md:hidden border-stroke-soft-200 rounded-full py-[16px] px-[24px]'>
                  <p className={`${typography.paragraphXSmall} text-text-main-900`}>12 Rue Principale Ville de Québec, Québec, Canada</p>
                </div>
                <div className='hidden md:flex  flex-col flex-1 gap-[4px] '>
                  <div className=''>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>12 Rue Principale Ville de Québec, Québec, Canada</p>
                  </div>

                  <div className='flex flex-row flex-1'>
                    <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                  </div>
                </div>
              </div>

          </div>
        </div>
        <div className='w-full md:hidden'>
          <button className=' w-full flex flex-row justify-center items-center text-text-white-0 bg-primary-purple-700 rounded-full p-[10px]'>
            <img src={edit} alt='edit'/>
            Edit
          </button>
        </div>
      </div>





      <div className='w-full flex flex-col flex-1 gap-[32px]'>
        <div className='flex flex-col-reverse gap-[20px] md:gap-0 md:flex-row flex-1 md:items-center'>
          <h5 className={`${typography.labelLarge} text-text-main-900`}>Business/Store Details</h5>
          <button type='button' className={`${typography.labelSmall} flex flex-row gap-[12px] items-center justify-center p-[10px] ml-auto bg-redBase rounded-[10px] h-[38px] max-w-[190px] text-text-white-0 `}>
            <span><img src={closeFillIcon} className='w-[100%] ' alt='arrow'/> </span>
            Deactivate Account</button> 
        </div>

        <div className='flex flex-col flex-1 gap-[32px]'>
          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-rowflex-1 '>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>Store Logo</h5>
              <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Min 400x400px, PNG or JPEG formats.</p>
            </div>

            <div className=''>
              <div className='flex flex-col md:flex-row flex-1 gap-[16px] items-center'>
                <div className=''>
                  <img src={profileAvatar} alt='avatar'/>
                </div>

                <div className='flex flex-1'>
                  <button className={`${typography.labelSmall} btx flex flex-row gap-[12px] items-center justify-center p-[10px] bg-bg-white-0 border-stroke-soft-200 border-[1px] rounded-[10px] h-[38px] max-w-[80px] text-text-sub-500 `}> Upload</button>
                </div>
              </div>
            </div>

          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-rowflex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
                <h5 className={`${typography.labelSmall} text-text-main-900`}>Business/Store Name</h5>
                <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Your name will not be visible to your contacts.</p>
              </div>

              <div className=''>
                <div className='border md:hidden border-stroke-soft-200 rounded-full py-[16px] px-[24px]'>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>High Fashion store</p>
                </div>
                <div className='hidden md:flex  flex-col flex-1 gap-[4px] '>
                  <div className=''>
                  <p className={`${typography.paragraphXSmall} text-text-main-900`}>High Fashion store</p>
                  </div>

                  <div className='flex flex-row flex-1'>
                  <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-row flex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
                <h5 className={`${typography.labelSmall} text-text-main-900`}>Email Address</h5>
                <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Business email address recommended.</p>
              </div>

              <div className=''>
                <div className='border md:hidden border-stroke-soft-200 rounded-full py-[16px] px-[24px]'>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>Hfs@gmail.com</p>
                </div>
                <div className='hidden md:flex  flex-col flex-1 gap-[4px] '>
                  <div className=''>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>Hfs@gmail.com</p>
                  </div>

                  <div className='flex flex-row flex-1'>
                    <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-rowflex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
                <h5 className={`${typography.labelSmall} text-text-main-900`}>Company Registration Number</h5>
                <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Business regiistration number goes here</p>
              </div>

              <div className=''>
                <div className='border md:hidden border-stroke-soft-200 rounded-full py-[16px] px-[24px]'>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>Hfs@gmail.com</p>
                </div>
                <div className='hidden md:flex flex-col flex-1 gap-[4px] '>
                  <div className=''>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>Hfs@gmail.com</p>
                  </div>

                  <div className='flex flex-row flex-1'>
                    <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-row flex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
                <h5 className={`${typography.labelSmall} text-text-main-900`}>Phone Number</h5>
                <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Business phone number recommended.</p>
              </div>

              <div className=''>
                <div className='border md:hidden border-stroke-soft-200 rounded-full py-[16px] px-[24px]'>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>+1 (012) 345-6789</p>
                </div>
                <div className='hidden md:flex flex-col flex-1 gap-[4px] '>
                  <div className=''>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>+1 (012) 345-6789</p>
                  </div>

                  <div className='flex flex-row flex-1'>
                    <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                  </div>
                </div>
              </div>
          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='flex flex-col gap-[12px] md:gap-0 md:flex-row flex-1'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
                <h5 className={`${typography.labelSmall} text-text-main-900`}>Legal Address</h5>
                <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Legal residential address for billing details.</p>
              </div>

              <div className=''>
                <div className='border md:hidden border-stroke-soft-200 rounded-full py-[16px] px-[24px]'>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>12 Rue Principale Ville de Québec, Québec, Canada</p>
                </div>
                <div className='hidden md:flex flex-col flex-1 gap-[4px] '>
                  <div className=''>
                    <p className={`${typography.paragraphXSmall} text-text-main-900`}>12 Rue Principale Ville de Québec, Québec, Canada</p>
                  </div>

                  <div className='flex flex-row flex-1'>
                    <p className={`${typography.labelSmall} text-primary-purple-700`}>Edit</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='w-full md:hidden'>
          <button className=' w-full flex flex-row justify-center items-center text-text-white-0 bg-primary-purple-700 rounded-full p-[10px]'>
            <img src={edit} alt='edit'/>
            Edit
          </button>
        </div>
      </div>


    </div>
  )
}

export default AccountSettings