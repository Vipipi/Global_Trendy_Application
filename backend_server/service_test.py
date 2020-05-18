import service
import jsonrpclib
import time

from multiprocessing import Process

def test():
	server_process = Process(target = service.start)
	server_process.start()
	
	time.sleep(1)
	
	server = jsonrpclib.ServerProxy('http://localhost:4040')
	assert server.add(5,6) == 11
	
	news = server.getOneNews()
	print(news)
	assert news is not None
	
	print('test passed!')
	
	server_process.terminate()
	
if __name__ == "__main__":
	test()