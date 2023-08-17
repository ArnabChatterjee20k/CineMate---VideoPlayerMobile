import React from 'react'
import { StatusBar, View } from 'react-native'

export default function SafeAreaView({children}) {
    const gap = StatusBar.currentHeight+5;

  return (
    <View style={{paddingTop:gap,flex:1}}>{children}</View>
  )
}

