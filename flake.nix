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
      ];

      shellHook = ''
        echo "dev shell loaded! pnpm: $(pnpm --version)"
        pnpm install
      '';
    };
  };
}
