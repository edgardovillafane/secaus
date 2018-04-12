<?php 
/*

Edgardo Villafane 4/12/18
Conection classes

*/
class Connect{
	
	private $host;
	private $user;
	private $password;
	private $database;
	private $conn;
	 
	public function __construct(){ 

	include_once("config.php");
	
	$this->host=HOST;
	$this->user=USER; 
	$this->password=PASSWORD;
	$this->database=DATABASE;
	   
	}
	//create connection 
	public function CreateConnection(){
		$this->conn = new mysqli($this->host, $this->user, $this->password, $this->database);
	}
	//Close connection	  
	public function CloseConnection(){
		$this->conn->close();
	}
	//Execute connection
	public function Execute($sql){
		$result = $this->conn->query($sql);
		return $result;
	}
	public function ExecuteDos($sql){
		$result = $this->conn->query($sql);
		return $result;
	}
	public function ExecuteTr($sql){
		$this->conn->query($sql);
		return mysqli_insert_id($this->conn);
	}
}

?>