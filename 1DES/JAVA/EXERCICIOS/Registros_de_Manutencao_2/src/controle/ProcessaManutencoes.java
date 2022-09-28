package controle;

import java.util.ArrayList;

import dao.ManutencaoDAO;
import modelo.Manutencao;

public class ProcessaManutencoes {

	public static ArrayList<Manutencao> manutencoes = new ArrayList<>();
	private static ManutencaoDAO md = new ManutencaoDAO();
	
	public static void abrir() {
		manutencoes= md.ler();
		if(manutencoes.size() ==0) {
			manutencoes.add(new Manutencao(1,"20/02/2020","aro",20,80));
		}
		
	}
	
	public static void salvar() {
		md.escrever(manutencoes);
	}
	
}
