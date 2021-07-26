import { BiArrowBack, useNavigate, Text, Flex } from '.'

const NotificationHeader = () => {
  const navigate = useNavigate()

  return (
    <>
      <Flex alignItems="center" p={2} pt={4} w="100%">
        <BiArrowBack fontSize="x-large" onClick={() => navigate(-1)} />
        <Text fontSize="large" ml={3} fontWeight="700">
          Notifications
        </Text>
      </Flex>
      <hr />
    </>
  )
}

export default NotificationHeader
