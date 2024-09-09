import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SingleRepositoryView from './SingleRepositoryItem';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';
import ReviewList from './ReviewList';
import { getMainStyles } from './styles';


const Main = () => {
  const styles = getMainStyles();
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/:repoId" element={<SingleRepositoryView />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/createreview' element={<CreateReview />} />
        <Route path='/reviewlist' element={<ReviewList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
