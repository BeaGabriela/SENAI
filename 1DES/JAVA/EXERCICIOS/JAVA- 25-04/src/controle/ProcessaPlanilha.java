package controle;

import java.util.ArrayList;

import modelo.Planilha;

public class ProcessaPlanilha {
	public static ArrayList<Planilha> linhas = new ArrayList<>();
	private static DAO dao = new DAO();// estanciando o DAO;

	public static void carregar() {
		linhas = dao.abrir();
	}

	public static void saida(int opcao) {
		switch (opcao) {
		case 1:
			dao.salvarSoma(linhas);
			break;
		case 2:
			dao.salvarMultiplicacao(linhas);
			break;
		case 3:
			dao.salvarSubtracao(linhas);
			break;
		case 4:
			dao.salvarDivisao(linhas);
			break;
		case 5:
			System.out.println("Até mais.");
			break;
		default:
			System.out.println("Opção inválida.");
		}

	}
}
