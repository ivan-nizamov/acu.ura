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
      packages = [
        pkgs.nodejs_22
        pkgs.nodePackages.pnpm
	pkgs.deno
      ];

      shellHook = ''
        echo "shadcn/ui dev shell loaded! Node: $(node --version), pnpm: $(pnpm --version)"
      '';
    };
  };
}
