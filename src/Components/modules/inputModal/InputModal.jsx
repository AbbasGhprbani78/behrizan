import React from 'react'
import './InputModal.css'
import { useMyContext } from '../../../context/langugaeContext'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
export default function InputModal({ placeholder }) {

    const { language } = useMyContext()
    const { t } = useTranslation

    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    return (
        <div className='inputModal'>
            {
                language === "fa" ?
                    <>
                        <CacheProvider value={cacheRtl} >
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                                className='input-modal-order'
                            >
                                <TextField id="outlined-basic" label={placeholder} variant="outlined" />
                            </Box>
                        </CacheProvider>
                    </> :
                    <>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            className='input-modal-order'
                        >
                            <TextField id="outlined-basic" label={placeholder} variant="outlined" />
                        </Box>
                    </>
            }

        </div>
    )
}
