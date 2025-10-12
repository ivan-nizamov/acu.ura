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
        bun
      ];

      shellHook = ''
        echo "dev shell loaded! bun: $(bun --version)"
        bun install
        bun run dev
      '';
    };
  };
}
