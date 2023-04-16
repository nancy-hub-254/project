CREATE database booking_details;
use booking_details;
CREATE TABLE `details` (
  `id` int primary key,
  `phone` varchar(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `package` text NOT NULL,
  `destination` varchar(20) NOT NULL,
  `people` int(15) NOT NULL,
  `date` date NOT NULL
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;