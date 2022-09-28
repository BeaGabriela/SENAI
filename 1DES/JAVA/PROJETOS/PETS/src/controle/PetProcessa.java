package controle;

import java.text.ParseException;
import java.util.ArrayList;

<<<<<<< HEAD
import visao.Pet;

public class PetProcessa {
	public static ArrayList<Pet> pets = new ArrayList<>();
	
	public static void carregarTestes() throws ParseException {
=======
import modelo.Pet;

public class PetProcessa {
	public static ArrayList<Pet> pets = new ArrayList<>();
	private static Pet_DAO pd = new Pet_DAO();
	
	public static void abrir() {
		pets.pd.ler();
	}
	
	public static void salvar() {
		pets.pd.ler();
	}
	
	
		public static void carregarTestes() throws ParseException {
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
		//Limpar a lista
		pets = new ArrayList<>();
		//Preencher com testes
		pets.add(new Pet (1, "Hamster", "Paçoca", "Hamster chinês",30, "10/10/2021", "Victor", "(19) 992019-3019" ));
		pets.add(new Pet (2, "Gato", "Miau", "Gato sem raça", 10, "20/10/2001", "Lurdes", "(19) 9876-1234"));
		pets.add(new Pet (3, "Cachorro", "Marley", "Vira-lata", 8, "10/05/2020", "Marcos", "(19) 98948-1284"));
		pets.add(new Pet (4, "Coelho", "Graçinha", "Coelho anão", 1, "02/02/2003", "Mariana", "(19) 8090-1804"));
		pets.add(new Pet (5, "Passáro", "Peninha", "Calopsita", 0.2f, "08/09/2004", "Carlos", "(19) 8090-6003"));
		
	}
<<<<<<< HEAD
=======
	
	
	
	
>>>>>>> 370ad510e309e95a617dcbcc5ed2fabe2a8fc938
}
