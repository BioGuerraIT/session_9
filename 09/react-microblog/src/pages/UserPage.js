import { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import Body from '../components/Body';
import TimeAgo from '../components/TimeAgo';
import { useApi } from '../contexts/ApiProvider';
import Posts from '../components/Posts';

export default function Posts({ content }) {
  const [posts, setPosts] = useState();
  const api = useApi();

  let url;
  switch (content) {
    case 'feed':
    case undefined:
      url = '/feed';
      break;
    case 'explore':
      url = '/posts';
      break
    default:
      url = `/users/${content}/posts`;
      break;
  }

  useEffect(() => {
    (async () => {
      const response = await api.get(url);
      if (response.ok) {
        setPosts(response.body.data);
      }
      else {
        setPosts(null);
      }
    })();
  }, [api, url]);

  return (
    <Body sidebar>
      {user === undefined ?
        <Spinner animation="border" />
      :
        <>
          {user === null ?
            <p>Could not retrieve blog posts.</p>
          :
            <>
              <Stack direction="horizontal" gap={4}>
              <Image src={user.avatar_url + '&s=128'} roundedCircle />
              <div>
                <h1>{user.username}</h1>
                {user.about_me && <h5>{user.about_me}</h5>}
                <p>
                  Member since: <TimeAgo isoDate={user.first_seen} />
                  <br />
                  Last seen: <TimeAgo isoDate={user.last_seen} />
                </p>
              </div>
              </Stack>
              <Posts content={user.id} />
            </>
          }
        </>
      }
    </Body>
  );
}