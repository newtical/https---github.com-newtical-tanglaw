import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function NewPassScreen() {
  const router = useRouter();
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Change Password</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Old Password:*</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Old Password" secureTextEntry={!showOld} />
            <TouchableOpacity onPress={() => setShowOld(!showOld)}>
              <Feather name={showOld ? "eye" : "eye-off"} size={20} color="#7F8C8D" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password:*</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="New Password" secureTextEntry={!showNew} />
            <TouchableOpacity onPress={() => setShowNew(!showNew)}>
              <Feather name={showNew ? "eye" : "eye-off"} size={20} color="#7F8C8D" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password:*</Text>
        <View style={styles.inputWrapper}>
            <TextInput 
            style={styles.input} 
        placeholder="Confirm Password" 
         placeholderTextColor="#7F8C8D" 
        secureTextEntry={!showConfirm} 
    />
    <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
      <Feather name={showConfirm ? "eye" : "eye-off"} size={20} color="#7F8C8D" />
    </TouchableOpacity>
  </View>
</View>

        <TouchableOpacity style={styles.doneButton} onPress={() => router.back()}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { backgroundColor: '#0D2A94', height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  content: { padding: 25 },
  inputContainer: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#2C3E50', marginBottom: 8 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#7F8C8D', borderRadius: 8, paddingHorizontal: 15, height: 50 },
  input: { flex: 1, fontSize: 16 },
  doneButton: { backgroundColor: '#0D2A94', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 30 },
  doneButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});