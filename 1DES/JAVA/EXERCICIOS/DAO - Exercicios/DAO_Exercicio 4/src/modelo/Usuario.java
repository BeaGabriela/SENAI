package modelo;

public class Usuario {

	private String email;
	private String senha;

	// Atributos
	public Usuario(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}

	// Metodos de acesso(Get e Set);
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	// Construtores
	public Usuario(String linha) {
		this.email = linha.split(";")[0];
		this.senha = linha.split(";")[1];
	}

	@Override
	// Saida
	public String toString() {
		return email + "\t" + "*******";
	}

}
