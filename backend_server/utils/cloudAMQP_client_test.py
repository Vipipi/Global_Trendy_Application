from cloudAMQP_client import CloudAMQPClient

TEST_CLOUDAMQP_URL = "amqp://rgsjudsv:XQZWO-GSRQ5eLS2SO4Gat0zN-_JtFB-b@mustang.rmq.cloudamqp.com/rgsjudsv"
TEST_QUEUE_NAME = "trendy"

def test_basic():
    client = CloudAMQPClient(TEST_CLOUDAMQP_URL, TEST_QUEUE_NAME)

    sentMsg = {'test':'test'}
    client.sendMessage(sentMsg)

    client.sleep(5)

    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg

    print('test_basic passed.')

if __name__ == "__main__":
    test_basic()