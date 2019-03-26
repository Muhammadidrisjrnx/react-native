
import React from 'react';
import { Modal, View, Text, ActivityIndicator, Button } from 'react-native';

export const LoadingDialog = ({ visible }) => (
    <Modal onRequestClose={() => null} transparent={true}>
      <View style={{ flex: 1, backgroundColor: '#00000050', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: '200' }}>Loading</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
)