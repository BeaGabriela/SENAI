package Controle;

import java.util.ArrayList;

import DAO.ManutencaoDAO;
import modelo.Manutencao;

public class ProcessaManutencoes {
	public static ArrayList<Manutencao>manutencao = new ArrayList<>();
	private static ManutencaoDAO md = new ManutencaoDAO();
	
	public ProcessaManutencoes(){
		ArrayList<Manutencao>manutencoes = new ArrayList<>();
	}
	public static void abrir() {
		manutencao = md.ler();
		if(manutencao.size() == 0) {
			manutencao.add(new Manutencao(1, "03/10/2021", "Mariana",12, 2));
		}
		
	}
	
public static void salvar() {
	md.escrever(manutencao);
	
}

public static int indexOf(int id) {
	// TODO Auto-generated method stub
	return 0;
}


}
