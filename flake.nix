{
  description = "shadcn/ui dev environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";  # Use unstable for latest Node/pnpm
  };

  outputs = { nixpkgs, ... }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in {
    devShells.${system}.default = pkgs.mkShell {
      packages = with pkgs;[
        pnpm
        nodejs_24
        zsh
      ];

      shellHook = ''
        echo "dev shell loaded! node: $(node --version)"
        pnpm install
        if [ -z "$ZSH_VERSION" ]; then
          exec ${pkgs.zsh}/bin/zsh
        fi
      '';
    };
  };
}
