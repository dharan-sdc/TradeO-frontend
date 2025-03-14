import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/State/Store'
import { updateProfile } from "@/State/Auth/Action"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { VerifiedIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import AccountVerificationForm from './AccountVerificationForm'

const Profile = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(store => store)
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false); // Track status

  const handleVerificationSuccess = () => {
    setIsTwoFactorEnabled(true); // Update status on successful OTP verification
  };

  // Local state for profile updates
  const [profileData, setProfileData] = useState({
    dateOfBirth: auth.user?.dateOfBirth || "",
    nationality: auth.user?.nationality || "",
    address: auth.user?.address || "",
    city: auth.user?.city || "",
    postcode: auth.user?.postcode || "",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })
  }

  const handleSaveProfile = () => {
    dispatch(updateProfile(profileData))
    setIsTwoFactorEnabled(true);
  }

  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='lg:flex gap-32'>
              <div className='space-y-7'>
                <div className='flex'>
                  <p className='w-[9rem]'>Email:</p>
                  <p className='text-gray-500'>{auth.user?.email}</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Full Name:</p>
                  <p className='text-gray-500'>{auth.user?.fullName}</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Date of Birth:</p>
                  <p className='text-gray-500'>{profileData.dateOfBirth || "dd : mm : yyyy"}</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Nationality:</p>
                  <p className='text-gray-500'>{profileData.nationality || "Indian"}</p>
                </div>
              </div>
              <br />
              <div className='space-y-7'>
                <div className='flex'>
                  <p className='w-[9rem]'>Address:</p>
                  <p className='text-gray-500'>{profileData.address || "No: , xxx Street , xxx city"}</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>City:</p>
                  <p className='text-gray-500'>{profileData.city || "xxx city"}</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Postcode:</p>
                  <p className='text-gray-500'>{profileData.postcode || "*** ***"}</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem]'>Country:</p>
                  <p className='text-gray-500'>India</p>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <Dialog>
                <DialogTrigger>
                  <Button>Edit Profile</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Your Details</DialogTitle>
                    <DialogDescription>Update your personal information.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input name="dateOfBirth" value={profileData.dateOfBirth} onChange={handleInputChange} placeholder="Date of Birth" />
                    <Input name="nationality" value={profileData.nationality} onChange={handleInputChange} placeholder="Nationality" />
                    <Input name="address" value={profileData.address} onChange={handleInputChange} placeholder="Address" />
                    <Input name="city" value={profileData.city} onChange={handleInputChange} placeholder="City" />
                    <Input name="postcode" value={profileData.postcode} onChange={handleInputChange} placeholder="Postcode" />
                    <Button onClick={handleSaveProfile}>Save Changes</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* 2-Step Verification */}
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2-Step Verification</CardTitle>
                {isTwoFactorEnabled ? (
                  <Badge className="space-x-2 text-white bg-green-700">
                    <span>Enabled</span>
                    <VerifiedIcon />
                  </Badge>
                ) : (
                  <Badge className="bg-purple-800 p-1.5">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>{isTwoFactorEnabled ? "Renewal your Two-factor" : "Enable Two-Step Verification"}</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Verify your Account</DialogTitle>
                  </DialogHeader>
                  <AccountVerificationForm onVerificationSuccess={handleVerificationSuccess} />

                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile
