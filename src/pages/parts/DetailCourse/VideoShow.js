import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Modal from '../../../component/Modal';
export default function VideoShow({previewSelected, setPreviewSelected}) {
  const [visible, setVisible] = useState(() => true);
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      setPreviewSelected(null);
      setVisible(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <Modal
      visible={visible}
      setVisible={() => {
        setVisible(false);
        setPreviewSelected(null);
      }}>
      <View>
        <YoutubePlayer
          height={350}
          play={playing}
          videoId={previewSelected.video}
          onChangeState={onStateChange}
        />
      </View>
    </Modal>
  );
}
