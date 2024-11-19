import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, Pressable } from 'react-native';
import { supabase } from './supabase';

export default function PizzaBurger() {
  const [form, setForm] = useState({
    title: '',
    city: '',
    noOfCampuses: '',
  });

  const [base, setBase] = useState([]);

  useEffect(() => {
    const campusDataFetch = async () => {
      let { data, error } = await supabase.from('campus').select('*');
      if (error) {
        console.log(error);
      }
      console.log('Campus Data Check Karo==', data);
      setBase(data);
    };
    campusDataFetch();
  }, []);

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    // Validation for form data
    if (!form.title || !form.city || !form.noOfCampuses) {
      Alert.alert('Validation Error', 'Please fill all fields.');
      return;
    }
  
    // Convert noOfCampuses into an array
    const campusesArray = form.noOfCampuses.split(',').map((campus) => campus.trim());
  
    // Insert data into Supabase
    let { data, error } = await supabase
      .from('campus')
      .insert([{ title: form.title, city: form.city, numofcampuses: campusesArray }]);
  
    if (error) {
      Alert.alert('Error', 'Failed to add data.');
      console.log(error);
    } else {
      Alert.alert('Success', 'Data added successfully!');
      console.log('Inserted Data:', data);
  
      // Refresh the list
      setBase((prev) => [...prev, ...data]);
  
      // Clear the form
      setForm({
        title: '',
        city: '',
        noOfCampuses: '',
      });
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Form */}
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={form.title}
        onChangeText={(text) => handleInputChange('title', text)}
      />

      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={form.city}
        onChangeText={(text) => handleInputChange('city', text)}
      />

      <Text style={styles.label}>No. of Campuses</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of campuses"
        value={form.noOfCampuses}
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange('noOfCampuses', text)}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {/* Display Data */}
      <View>
        <FlatList
          data={base}
          renderItem={({ item }) => (
            <Pressable style={styles.renderitem}>
              <Text style={styles.title}>Name: {item.title}</Text>
              <Text style={styles.title}>City: {item.city}</Text>
              <Text style={styles.title}>Campuses: {item.numofcampuses}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ gap: 10, padding: 10 }}
          columnWrapperStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  renderitem: {
    flex: 1,
    backgroundColor: 'lightgrey',
    maxWidth: '50%',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
