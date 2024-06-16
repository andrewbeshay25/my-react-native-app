import { SafeAreaView, ScrollView, Image, View, Text } from 'react-native'
import React, {useState} from 'react'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import {Link} from 'expo-router'

const SignIn = () => {

  const [form, setform] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="w-full mt-7 pt-15"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default SignIn