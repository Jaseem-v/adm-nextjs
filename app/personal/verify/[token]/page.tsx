"use client"

import httpClient from '@/services/axiosInstance';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const VerifyPersonal = ({ params }: { params: { token: string } }) => {
    const router = useRouter()
    useEffect(() => {
        const { token } = params
        const verificationToken = {
            token: token
        }
        const verifyToken = async () => {
            try {
                await httpClient().patch('/user/personal/verify-account', verificationToken)
                .then(res => {
                    if (res.status === 200) {
                        console.log('account verified')
                        router.push('/login')
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
        verifyToken()
    }, [])
}
export default VerifyPersonal;