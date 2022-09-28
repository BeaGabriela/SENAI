package controle;

import java.util.ArrayList;

import modelo.Principal;

public class Processamento {

		public static ArrayList<Principal> linhas = new ArrayList<>();
		private static DAO dao = new DAO();
		
		public static void carregar() {
			linhas = dao.abrir();
		}
		
		public static void saida() {
			dao.salvar(linhas);
			
		}
		

	}


