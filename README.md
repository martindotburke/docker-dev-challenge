# docker-dev-challenge
Challenge 9 - Big Data Aggregator, Take 2

Description
Let's assume we have CSV files that contain leaderboard information for a game. Each file has a list of names (each up to 20 alphanumeric characters long) along with a score (integer ranging from 1 to 20k) and a date (in dd-MM-yyyy format) in each line. For example: 
scores.csv
DavidD,1200,30-05-2017
DavidD,1500,30-05-2017
O13dumDum,1500,30-05-2017
Azxcd1234,1500,29-05-2017
RjohBo2,1500,30-05-2017
The file is not sorted in any way and can contain identical lines, which would represent a player having achieved the same score on the same day more than once. 
A single file could contain up to 5 million lines.

We want to be able to parse such files, combining their data, and calculating the top 10 for given periods of time.
The returned top 10 should be in the following format, sorted by highest score to lowest and contain only the 10 highest (or less if no data is available for more):
{
    "top10": [
        { "name": score },
        ...
    ]
}

You should build 2 HTTP POST endpoints:
Request
Type
BODY
Format
Input Description
Output Description
input	POST	
{
	"files": [
		url_of_file1 ,
		...
	]
}
/input	
The input files would be of the format described above. The input files are expected to always be available in that url and immutable.
Top 10 as described above for last 10 days. For example if current date is set 20-10-2017, acceptable scores would be any scores from 11-10-2017 inclusive till 20-10-2017 inclusive
All input files should be taken into consideration along with the currently set date.
date	POST	-	/date?current=DATE	Sets the current date (as provided in dd-MM-yyyy format). May never be earlier than the previously set current date (or 01-01-2010)	
same as above

Your application should be able to be built into a DOCKER container and you should provide instructions for us on how to do so from the source code. The container will run on a macbook, with a limit of RAM set to 256 MB and Disk space to 1 GB.
Memory will be limited using the --memory=256m option when we run the image.
Disk will be limited using the --storeage-opt size=1G option. It is easy to cheat in the disk area. Please do not. If you are found cheating, your solution will be disqualified and you will be the subject of public shame! Writting to some disk space over the netowrk or delegating work to some of your own deployed agents over the network is also considering cheating btw. 
You should also provide some way to reset the data of the system (whether that is a simple restart of the docker image, or some endpoint).
Objective
The challenge is in building an efficient data structure that allows for good resource management, and parsing and processing the file data and sending back the response as fast as possible.
Feel free to pick any combination technologies which suit the problem or your learning desires.
You can get sample input files for your testing from this page: Dev Challenge 9 Sample Files. (make sure to unzip them before using them). They are 1mil entries each, all using the same 5k unique users.

By the deadline, you must have sent us the source code of your solution with simpe instructions on how to build the docker image and run it. 
During assesement we will do the following 2 tests for different sized datasets. The first will be a dataset, that assuming you have a good compact data structure, should fit in memory. The second will be a huge dataset where we do not see how you would be able to fit it all in memory and other tricks & disk utilization would be expected. Both datasets will have to run on the same docker image.
For eact participant, for each dataset we will:
Run your docker image and make sure data is reset.
Invoke the date endpoint and input endpoints a number of times with pre-generated data. You should expect:
for first test: up to a total of 5 mil entries for up to 5k unique users. Entries may or may not be split in different files.
for second test: up to a total of 500 mil entries for up to 100k unique users. Entries will be split in 100 roughly equally sized files.
Invoke either the input or the date endpoint one final time and record time taken to get back the response.
Winning categories
Assuming the data returned is correct, fastest response for test 1.
Assuming the data returned is correct (and your system did not crash), fastest response for test 2.
Most interesting solution as voted also wins.
Prize
TBA
