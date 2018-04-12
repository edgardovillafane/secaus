<?php 
//main class
class Seca{
	public function ExecuteSql($sql){
		$conex = New Connect();
		$conex -> CreateConnection();
		$conex -> Execute($sql);
		$conex -> CloseConnection();
	}	
	//connection with de DB - Create JSON Output  
	public function CreateJson($sql){
		$con = New Connect();
		$con -> CreateConnection();
		$result = $con -> Execute($sql);
		$i=0;
		$ArrayJson= array();
		while($fila=mysqli_fetch_assoc($result)){
			$ArrayJson[$i] = $fila;
	        $i++;
		}
		echo json_encode($ArrayJson);
		$con -> CloseConnection();		
	}
	//delete method 
	public function Borrar($sql){
			$con = new Connect();
			$con->CreateConnection();
			$con->Execute($sql);
			$con->CloseConnection();
	}
}

?>