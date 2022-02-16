import { BookmarkPosts, UserPosts, useState, Flex, Text, useSelector } from '.'

const Headers = ({ user }) => {
  const [view, setView] = useState('tweets')

  const { user: loginedUser } = useSelector((state) => state.auth)
  return (
    <>
      <Flex justifyContent="space-evenly">
        <Text p={2} pb={1} onClick={() => setView('tweets')}>
          Tweets
        </Text>

        {loginedUser._id === user._id && (
          <Text p={2} pb={1} onClick={() => setView('bookmarks')}>
            BookMarks
          </Text>
        )}
      </Flex>
      <hr />
      {view === 'tweets' && <UserPosts />}
      {view === 'bookmarks' && <BookmarkPosts />}
    </>
  )
}

export default Headers
