import { SafeAreaView, Text, View, Image, KeyboardAvoidingView, Platform, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{
            width: 150,
            height: 100,
          }}
          source={{
            uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png',
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 12,
              color: '#041E42',
            }}
          >
            Login In to your Account
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#d0d0d0',
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
              gap: 5,
            }}
          >
            <MaterialCommunityIcons
              name="email"
              size={24}
              color="gray"
              style={{
                marginLeft: 8,
              }}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email"
              placeholderTextColor="gray"
              style={{
                color: 'gray',
                marginVertical: 5,
                width: 250,
                fontSize: 16,
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#d0d0d0',
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
              gap: 5,
            }}
          >
            <MaterialCommunityIcons
              name="lock"
              size={24}
              color="gray"
              style={{
                marginLeft: 8,
              }}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter your password"
              placeholderTextColor="gray"
              style={{
                color: 'gray',
                marginVertical: 5,
                width: 250,
                fontSize: 16,
              }}
            />
          </View>
        </View>
        <View style={{
          marginTop: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Text>Keep me logged in</Text>
          <Text style={{
            color: "#007FFF",
            fontWeight: "500",
          }}>Forget Password</Text>
        </View>

        <View style={{
          marginTop: 80,
        }}>
          <Pressable style={{
            width: 300,
            backgroundColor: "#febe10",
            borderRadius: 6,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 15,
          }}>
            <Text style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>Login</Text>
          </Pressable>
        </View>


        <View style={{
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text style={{
            color: 'gray',
            fontSize: 16,
          }}>
            Don't have an account?{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={{
              color: '#007FFF',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
              Sign up
            </Text>
          </Pressable>
        </View>



      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
});