_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{DELu:function(e,n,t){"use strict";t.r(n);var o=t("o0o1"),a=t.n(o);var r=t("BsWD");function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],o=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(c){a=!0,r=c}finally{try{o||null==s.return||s.return()}finally{if(a)throw r}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=t("HaE+"),c=t("IOcx"),l=t("SoUo"),d=t("PpzT"),f=t("FvBH"),m=t.n(f),u={positions:m.a.positions,triangles:m.a.cells,normals:[]},h=1024;function p(){return(p=Object(s.a)(a.a.mark((function e(n,t){var o,r,s,l,f,m,p,x,w,P,b,S,y,M,B,T,E,V,F,G,U,L,j,A,D,C,_,z,R,N,O,Y,k,I,X,Q,W,H,q,Z,$,J,K,ee,ne;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee=function(){var e=c.b.fromValues(0,50,-100),n=Math.PI*(Date.now()/2e3);c.b.rotateY(e,e,O,n);var t=c.a.create();return c.a.lookAt(t,e,O,N),c.a.multiply(H,Y,t),H},e.next=3,navigator.gpu.requestAdapter();case 3:return o=e.sent,e.next=6,o.requestDevice();case 6:return r=e.sent,e.next=9,Object(d.a)();case 9:for(s=e.sent,l=Math.abs(n.width/n.height),f=n.getContext("gpupresent"),m=f.configureSwapChain({device:r,format:"bgra8unorm"}),u.triangles.push([u.positions.length,u.positions.length+2,u.positions.length+1],[u.positions.length,u.positions.length+1,u.positions.length+3]),u.positions.push([-100,20,-100],[100,20,100],[-100,20,100],[100,20,-100]),u.normals=u.positions.map((function(){return[0,0,0]})),u.triangles.forEach((function(e){var n=i(e,3),t=n[0],o=n[1],a=n[2],r=u.positions[t],s=u.positions[o],l=u.positions[a],d=c.b.subtract(c.b.create(),s,r),f=c.b.subtract(c.b.create(),l,r);c.b.normalize(d,d),c.b.normalize(f,f);var m=c.b.cross(c.b.create(),d,f);c.b.add(u.normals[t],u.normals[t],m),c.b.add(u.normals[o],u.normals[o],m),c.b.add(u.normals[a],u.normals[a],m)})),u.normals.forEach((function(e){c.b.normalize(e,e)})),p=r.createBuffer({size:3*u.positions.length*2*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),x=new Float32Array(p.getMappedRange()),w=0;w<u.positions.length;++w)x.set(u.positions[w],6*w),x.set(u.normals[w],6*w+3);for(p.unmap(),P=3*u.triangles.length,b=r.createBuffer({size:P*Uint16Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),S=new Uint16Array(b.getMappedRange()),y=0;y<u.triangles.length;++y)S.set(u.triangles[y],3*y);return b.unmap(),M=r.createTexture({size:[h,h,1],usage:GPUTextureUsage.OUTPUT_ATTACHMENT|GPUTextureUsage.SAMPLED,format:"depth32float"}),B=M.createView(),T={vertexBuffers:[{arrayStride:6*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float3"},{shaderLocation:1,offset:3*Float32Array.BYTES_PER_ELEMENT,format:"float3"}]}]},E="triangle-list",V={cullMode:"back"},F=r.createRenderPipeline({vertexStage:{module:t?r.createShaderModule({code:v.vertexShadow}):r.createShaderModule({code:g.vertexShadow,transform:function(e){return s.compileGLSL(e,"vertex")}}),entryPoint:"main"},fragmentStage:{module:t?r.createShaderModule({code:v.fragmentShadow}):r.createShaderModule({code:g.fragmentShadow,transform:function(e){return s.compileGLSL(e,"fragment")}}),entryPoint:"main"},depthStencilState:{depthWriteEnabled:!0,depthCompare:"less",format:"depth32float"},primitiveTopology:E,vertexState:T,rasterizationState:V,colorStates:[]}),G=r.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,type:"uniform-buffer"},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,type:"sampled-texture",textureComponentType:"depth-comparison"},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,type:"comparison-sampler"}]}),U=r.createRenderPipeline({layout:r.createPipelineLayout({bindGroupLayouts:[G,F.getBindGroupLayout(1)]}),vertexStage:{module:t?r.createShaderModule({code:v.vertex}):r.createShaderModule({code:g.vertex,transform:function(e){return s.compileGLSL(e,"vertex")}}),entryPoint:"main"},fragmentStage:{module:t?r.createShaderModule({code:v.fragment}):r.createShaderModule({code:g.fragment,transform:function(e){return s.compileGLSL(e,"fragment")}}),entryPoint:"main"},depthStencilState:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus-stencil8"},primitiveTopology:E,vertexState:T,rasterizationState:V,colorStates:[{format:"bgra8unorm"}]}),L=r.createTexture({size:{width:n.width,height:n.height,depth:1},format:"depth24plus-stencil8",usage:GPUTextureUsage.OUTPUT_ATTACHMENT}),j={colorAttachments:[{attachment:void 0,loadValue:{r:.5,g:.5,b:.5,a:1}}],depthStencilAttachment:{attachment:L.createView(),depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},A=r.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),D=r.createBuffer({size:140,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),C=r.createBindGroup({layout:F.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:D}}]}),_=r.createBindGroup({layout:G,entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:B},{binding:2,resource:r.createSampler({compare:"less"})}]}),z=r.createBindGroup({layout:F.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:A}}]}),R=c.b.fromValues(0,50,-100),N=c.b.fromValues(0,1,0),O=c.b.fromValues(0,0,0),Y=c.a.create(),c.a.perspective(Y,2*Math.PI/5,l,1,2e3),k=c.a.create(),c.a.lookAt(k,R,O,N),I=c.b.fromValues(50,100,-100),X=c.a.create(),c.a.lookAt(X,I,O,N),Q=c.a.create(),-80,80,-80,80,-200,300,c.a.ortho(Q,-80,80,-80,80,-200,300),W=c.a.create(),c.a.multiply(W,Q,X),H=c.a.create(),c.a.multiply(H,Y,k),q=c.a.create(),c.a.translate(q,q,c.b.fromValues(0,-5,0)),c.a.translate(q,q,c.b.fromValues(0,-40,0)),Z=W,r.defaultQueue.writeBuffer(D,0,Z.buffer,Z.byteOffset,Z.byteLength),$=H,r.defaultQueue.writeBuffer(D,64,$.buffer,$.byteOffset,$.byteLength),J=I,r.defaultQueue.writeBuffer(D,128,J.buffer,J.byteOffset,J.byteLength),K=q,r.defaultQueue.writeBuffer(A,0,K.buffer,K.byteOffset,K.byteLength),ne={colorAttachments:[],depthStencilAttachment:{attachment:B,depthLoadValue:1,depthStoreOp:"store",stencilLoadValue:0,stencilStoreOp:"store"}},e.abrupt("return",(function(){var e=ee();r.defaultQueue.writeBuffer(D,64,e.buffer,e.byteOffset,e.byteLength),j.colorAttachments[0].attachment=m.getCurrentTexture().createView();var n=r.createCommandEncoder(),t=n.beginRenderPass(ne);t.setPipeline(F),t.setBindGroup(0,C),t.setBindGroup(1,z),t.setVertexBuffer(0,p),t.setIndexBuffer(b,"uint16"),t.drawIndexed(P),t.endPass();var o=n.beginRenderPass(j);o.setPipeline(U),o.setBindGroup(0,_),o.setBindGroup(1,z),o.setVertexBuffer(0,p),o.setIndexBuffer(b,"uint16"),o.drawIndexed(P),o.endPass(),r.defaultQueue.submit([n.finish()])}));case 77:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g={vertexShadow:"#version 450\nlayout(set = 0, binding = 0) uniform Scene {\n  mat4 lightViewProjMatrix;\n  mat4 cameraViewProjMatrix;\n  vec3 lightPos;\n} scene;\n\nlayout(set = 1, binding = 0) uniform Model {\n  mat4 modelMatrix;\n} model;\n\nlayout(location = 0) in vec3 position;\n\nvoid main() {\n  gl_Position =\n    scene.lightViewProjMatrix * model.modelMatrix * vec4(position, 1.0);\n}\n",fragmentShadow:"#version 450\nvoid main() {\n}\n",vertex:"#version 450\nlayout(set = 0, binding = 0) uniform Scene {\n  mat4 lightViewProjMatrix;\n  mat4 cameraViewProjMatrix;\n  vec3 lightPos;\n} scene;\n\nlayout(set = 1, binding = 0) uniform Model {\n  mat4 modelMatrix;\n} model;\n\nlayout(location = 0) in vec3 position;\nlayout(location = 1) in vec3 normal;\n\nlayout(location = 0) out vec3 shadowPos;\nlayout(location = 1) out vec3 fragPos;\nlayout(location = 2) out vec3 fragNorm;\n\nvoid main() {\n  // XY is in (-1, 1) space, Z is in (0, 1) space\n  vec4 posFromLight = scene.lightViewProjMatrix * model.modelMatrix * vec4(position, 1.0);\n\n  // Convert XY to (0, 1)\n  // Y is flipped because texture coords are Y down.\n  shadowPos = vec3(posFromLight.xy * vec2(0.5, -0.5) + 0.5, posFromLight.z);\n\n  gl_Position =\n    scene.cameraViewProjMatrix * model.modelMatrix * vec4(position, 1.0);\n  fragPos = gl_Position.xyz;\n  fragNorm = normal;\n}\n",fragment:"#version 450\nlayout(set = 0, binding = 0) uniform Scene {\n  mat4 lightViewProjMatrix;\n  mat4 cameraViewProjMatrix;\n  vec3 lightPos;\n} scene;\nlayout(set = 0, binding = 1) uniform texture2D shadowMap;\nlayout(set = 0, binding = 2) uniform samplerShadow shadowSampler;\n\nlayout(location = 0) in vec3 shadowPos;\nlayout(location = 1) in vec3 fragPos;\nlayout(location = 2) in vec3 fragNorm;\n\nlayout(location = 0) out vec4 outColor;\n\nconst vec3 albedo = vec3(0.9);\nconst float ambientFactor = 0.2;\n\nvoid main() {\n  // Percentage-closer filtering. Sample texels in the region\n  // to smooth the result.\n  float shadowFactor = 0.0;\n  for (int y = -1 ; y <= 1 ; y++) {\n      for (int x = -1 ; x <= 1 ; x++) {\n        vec2 offset = vec2(\n          x * ".concat(.0009765625,",\n          y * ").concat(.0009765625,");\n\n        shadowFactor += texture(\n          sampler2DShadow(shadowMap, shadowSampler),\n          vec3(shadowPos.xy + offset, shadowPos.z - 0.007));\n      }\n  }\n\n  shadowFactor = ambientFactor + shadowFactor / 9.0;\n\n  float lambertFactor = abs(dot(normalize(scene.lightPos - fragPos), fragNorm));\n\n  float lightingFactor = min(shadowFactor * lambertFactor, 1.0);\n  outColor = vec4(lightingFactor * albedo, 1.0);\n}\n")},v={vertexShadow:"\n[[block]] struct Scene {\n  [[offset(0)]] lightViewProjMatrix : mat4x4<f32>;\n  [[offset(64)]] cameraViewProjMatrix : mat4x4<f32>;\n  [[offset(128)]] lightPos : vec3<f32>;\n};\n\n[[block]] struct Model {\n  [[offset(0)]] modelMatrix : mat4x4<f32>;\n};\n\n[[set(0), binding(0)]] var<uniform> scene : Scene;\n[[set(1), binding(0)]] var<uniform> model : Model;\n\n[[location(0)]] var<in> position : vec3<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  Position = scene.lightViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n}\n",fragmentShadow:"\n[[stage(fragment)]]\nfn main() -> void {\n}\n",vertex:"\n[[block]] struct Scene {\n  [[offset(0)]] lightViewProjMatrix : mat4x4<f32>;\n  [[offset(64)]] cameraViewProjMatrix : mat4x4<f32>;\n  [[offset(128)]] lightPos : vec3<f32>;\n};\n\n[[block]] struct Model {\n  [[offset(0)]] modelMatrix : mat4x4<f32>;\n};\n\n[[set(0), binding(0)]] var<uniform> scene : Scene;\n[[set(1), binding(0)]] var<uniform> model : Model;\n\n[[location(0)]] var<in> position : vec3<f32>;\n[[location(1)]] var<in> normal : vec3<f32>;\n\n[[location(0)]] var<out> shadowPos : vec3<f32>;\n[[location(1)]] var<out> fragPos : vec3<f32>;\n[[location(2)]] var<out> fragNorm : vec3<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  # XY is in (-1, 1) space, Z is in (0, 1) space\n  const posFromLight : vec4<f32> = scene.lightViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n\n  # Convert XY to (0, 1)\n  # Y is flipped because texture coords are Y-down.\n  shadowPos = vec3<f32>(\n    posFromLight.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5),\n    posFromLight.z\n  );\n\n  Position = scene.cameraViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n  fragPos = Position.xyz;\n  fragNorm = normal;\n}\n",fragment:"\n[[block]] struct Scene {\n  [[offset(0)]] lightViewProjMatrix : mat4x4<f32>;\n  [[offset(64)]] cameraViewProjMatrix : mat4x4<f32>;\n  [[offset(128)]] lightPos : vec3<f32>;\n};\n\n[[set(0), binding(0)]] var<uniform> scene : Scene;\n[[set(0), binding(1)]] var<uniform_constant> shadowMap: texture_depth_2d;\n[[set(0), binding(2)]] var<uniform_constant> shadowSampler: sampler_comparison;\n\n[[location(0)]] var<in> shadowPos : vec3<f32>;\n[[location(1)]] var<in> fragPos : vec3<f32>;\n[[location(2)]] var<in> fragNorm : vec3<f32>;\n\n[[location(0)]] var<out> outColor : vec4<f32>;\n\nconst albedo : vec3<f32> = vec3<f32>(0.9, 0.9, 0.9);\nconst ambientFactor : f32 = 0.2;\n\n[[stage(fragment)]]\nfn main() -> void {\n  # Percentage-closer filtering. Sample texels in the region\n  # to smooth the result.\n  var shadowFactor : f32 = 0.0;\n  for (var y : i32 = -1 ; y <= 1 ; y = y + 1) {\n      for (var x : i32 = -1 ; x <= 1 ; x = x + 1) {\n        const offset : vec2<f32> = vec2<f32>(\n          f32(x) * ".concat(.0009765625,",\n          f32(y) * ").concat(.0009765625,");\n\n        shadowFactor = shadowFactor + textureSampleCompare(\n          shadowMap, shadowSampler,\n          shadowPos.xy + offset, shadowPos.z - 0.007);\n      }\n  }\n\n  shadowFactor = ambientFactor + shadowFactor / 9.0;\n\n  const lambertFactor : f32 = abs(dot(normalize(scene.lightPos - fragPos), fragNorm));\n\n  const lightingFactor : f32 = min(shadowFactor * lambertFactor, 1.0);\n  outColor = vec4<f32>(lightingFactor * albedo, 1.0);\n}\n")};n.default=Object(l.a)({name:"Shadow Mapping",description:"This example shows how to sample from a depth texture to render shadows.",slug:"shadowMapping",init:function(e,n){return p.apply(this,arguments)},wgslShaders:v,glslShaders:g,source:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeBasicExample } from '../../components/basicExample';\nimport glslangModule from '../../glslang';\n\nimport dragonRawData from 'stanford-dragon/4';\nconst mesh = {\n  positions: dragonRawData.positions as [number, number, number][],\n  triangles: dragonRawData.cells as [number, number, number][],\n  normals: [] as [number, number, number][],\n};\n\nconst shadowDepthTextureSize = 1024;\n\nasync function init(canvas: HTMLCanvasElement, useWGSL: boolean) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n\n  const aspect = Math.abs(canvas.width / canvas.height);\n\n  const context = canvas.getContext('gpupresent');\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: 'bgra8unorm',\n  });\n\n  // Push indices for an additional ground plane\n  mesh.triangles.push(\n    [\n      mesh.positions.length,\n      mesh.positions.length + 2,\n      mesh.positions.length + 1,\n    ],\n    [\n      mesh.positions.length,\n      mesh.positions.length + 1,\n      mesh.positions.length + 3,\n    ]\n  );\n\n  // Push positions for an additional ground plane\n  // prettier-ignore\n  mesh.positions.push(\n    [-100, 20, -100], //\n    [ 100, 20,  100], //\n    [-100, 20,  100], //\n    [ 100, 20, -100]\n  );\n\n  // Compute surface normals\n  mesh.normals = mesh.positions.map(() => {\n    // Initialize to zero.\n    return [0, 0, 0];\n  });\n  mesh.triangles.forEach(([i0, i1, i2]) => {\n    const p0 = mesh.positions[i0];\n    const p1 = mesh.positions[i1];\n    const p2 = mesh.positions[i2];\n\n    const v0 = vec3.subtract(vec3.create(), p1, p0);\n    const v1 = vec3.subtract(vec3.create(), p2, p0);\n\n    vec3.normalize(v0, v0);\n    vec3.normalize(v1, v1);\n    const norm = vec3.cross(vec3.create(), v0, v1);\n\n    // Accumulate the normals.\n    vec3.add(mesh.normals[i0], mesh.normals[i0], norm);\n    vec3.add(mesh.normals[i1], mesh.normals[i1], norm);\n    vec3.add(mesh.normals[i2], mesh.normals[i2], norm);\n  });\n  mesh.normals.forEach((n) => {\n    // Normalize accumulated normals.\n    vec3.normalize(n, n);\n  });\n\n  // Create the model vertex buffer.\n  const vertexBuffer = device.createBuffer({\n    size: mesh.positions.length * 3 * 2 * Float32Array.BYTES_PER_ELEMENT,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  {\n    const mapping = new Float32Array(vertexBuffer.getMappedRange());\n    for (let i = 0; i < mesh.positions.length; ++i) {\n      mapping.set(mesh.positions[i], 6 * i);\n      mapping.set(mesh.normals[i], 6 * i + 3);\n    }\n    vertexBuffer.unmap();\n  }\n\n  // Create the model index buffer.\n  const indexCount = mesh.triangles.length * 3;\n  const indexBuffer = device.createBuffer({\n    size: indexCount * Uint16Array.BYTES_PER_ELEMENT,\n    usage: GPUBufferUsage.INDEX,\n    mappedAtCreation: true,\n  });\n  {\n    const mapping = new Uint16Array(indexBuffer.getMappedRange());\n    for (let i = 0; i < mesh.triangles.length; ++i) {\n      mapping.set(mesh.triangles[i], 3 * i);\n    }\n    indexBuffer.unmap();\n  }\n\n  // Create the depth texture for rendering/sampling the shadow map.\n  const shadowDepthTexture = device.createTexture({\n    size: [shadowDepthTextureSize, shadowDepthTextureSize, 1],\n    usage: GPUTextureUsage.OUTPUT_ATTACHMENT | GPUTextureUsage.SAMPLED,\n    format: 'depth32float',\n  });\n  const shadowDepthTextureView = shadowDepthTexture.createView();\n\n  // Create some common descriptors used for both the shadow pipeline\n  // and the color rendering pipeline.\n  const vertexState: GPUVertexStateDescriptor = {\n    vertexBuffers: [\n      {\n        arrayStride: Float32Array.BYTES_PER_ELEMENT * 6,\n        attributes: [\n          {\n            // position\n            shaderLocation: 0,\n            offset: 0,\n            format: 'float3',\n          },\n          {\n            // normal\n            shaderLocation: 1,\n            offset: Float32Array.BYTES_PER_ELEMENT * 3,\n            format: 'float3',\n          },\n        ],\n      },\n    ],\n  };\n\n  const primitiveTopology = 'triangle-list' as const;\n  const rasterizationState: GPURasterizationStateDescriptor = {\n    cullMode: 'back',\n  };\n\n  const shadowPipeline = device.createRenderPipeline({\n    vertexStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.vertexShadow,\n          })\n        : device.createShaderModule({\n            code: glslShaders.vertexShadow,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n          }),\n      entryPoint: 'main',\n    },\n    fragmentStage: {\n      // This should be omitted and we can use a vertex-only pipeline, but it's\n      // not yet implemented.\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.fragmentShadow,\n          })\n        : device.createShaderModule({\n            code: glslShaders.fragmentShadow,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n          }),\n      entryPoint: 'main',\n    },\n    depthStencilState: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth32float',\n    },\n    primitiveTopology,\n    vertexState,\n    rasterizationState,\n    colorStates: [],\n  });\n\n  // Create a bind group layout which holds the scene uniforms and\n  // the texture+sampler for depth. We create it manually because the WebPU\n  // implementation doesn't infer this from the shader (yet).\n  const bglForRender = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,\n        type: 'uniform-buffer',\n      },\n      {\n        binding: 1,\n        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,\n        type: 'sampled-texture',\n\n        // Not added in the current types yet, and this API is changing.\n        textureComponentType: 'depth-comparison' as GPUTextureComponentType,\n      },\n      {\n        binding: 2,\n        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,\n        type: 'comparison-sampler',\n      },\n    ],\n  });\n\n  const pipeline = device.createRenderPipeline({\n    // Specify the pipeline layout. The layout for the model is the same, so\n    // reuse it from the shadow pipeline.\n    layout: device.createPipelineLayout({\n      bindGroupLayouts: [bglForRender, shadowPipeline.getBindGroupLayout(1)],\n    }),\n    vertexStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.vertex,\n          })\n        : device.createShaderModule({\n            code: glslShaders.vertex,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n          }),\n      entryPoint: 'main',\n    },\n    fragmentStage: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.fragment,\n          })\n        : device.createShaderModule({\n            code: glslShaders.fragment,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n          }),\n      entryPoint: 'main',\n    },\n    depthStencilState: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus-stencil8',\n    },\n    primitiveTopology,\n    vertexState,\n    rasterizationState,\n    colorStates: [\n      {\n        format: 'bgra8unorm',\n      },\n    ],\n  });\n\n  const depthTexture = device.createTexture({\n    size: {\n      width: canvas.width,\n      height: canvas.height,\n      depth: 1,\n    },\n    format: 'depth24plus-stencil8',\n    usage: GPUTextureUsage.OUTPUT_ATTACHMENT,\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // attachment is acquired and set in render loop.\n        attachment: undefined,\n\n        loadValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n      },\n    ],\n    depthStencilAttachment: {\n      attachment: depthTexture.createView(),\n\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  const modelUniformBuffer = device.createBuffer({\n    size: 4 * 16, // 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const sceneUniformBuffer = device.createBuffer({\n    // Two 4x4 viewProj matrices,\n    // one for the camera and one for the light.\n    // Then a vec3 for the light position.\n    size: 2 * 4 * 16 + 3 * 4,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const sceneBindGroupForShadow = device.createBindGroup({\n    layout: shadowPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: sceneUniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const sceneBindGroupForRender = device.createBindGroup({\n    layout: bglForRender,\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: sceneUniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: shadowDepthTextureView,\n      },\n      {\n        binding: 2,\n        resource: device.createSampler({\n          compare: 'less',\n        }),\n      },\n    ],\n  });\n\n  const modelBindGroup = device.createBindGroup({\n    layout: shadowPipeline.getBindGroupLayout(1),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: modelUniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const eyePosition = vec3.fromValues(0, 50, -100);\n  const upVector = vec3.fromValues(0, 1, 0);\n  const origin = vec3.fromValues(0, 0, 0);\n\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 2000.0);\n\n  const viewMatrix = mat4.create();\n  mat4.lookAt(viewMatrix, eyePosition, origin, upVector);\n\n  const lightPosition = vec3.fromValues(50, 100, -100);\n  const lightViewMatrix = mat4.create();\n  mat4.lookAt(lightViewMatrix, lightPosition, origin, upVector);\n\n  const lightProjectionMatrix = mat4.create();\n  {\n    const left = -80;\n    const right = 80;\n    const bottom = -80;\n    const top = 80;\n    const near = -200;\n    const far = 300;\n    mat4.ortho(lightProjectionMatrix, left, right, bottom, top, near, far);\n  }\n\n  const lightViewProjMatrix = mat4.create();\n  mat4.multiply(lightViewProjMatrix, lightProjectionMatrix, lightViewMatrix);\n\n  const viewProjMatrix = mat4.create();\n  mat4.multiply(viewProjMatrix, projectionMatrix, viewMatrix);\n\n  // Move the model so it's centered.\n  const modelMatrix = mat4.create();\n  mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(0, -5, 0));\n  mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(0, -40, 0));\n\n  // The camera/light aren't moving, so write them into buffers now.\n  {\n    const lightMatrixData = lightViewProjMatrix as Float32Array;\n    device.defaultQueue.writeBuffer(\n      sceneUniformBuffer,\n      0,\n      lightMatrixData.buffer,\n      lightMatrixData.byteOffset,\n      lightMatrixData.byteLength\n    );\n\n    const cameraMatrixData = viewProjMatrix as Float32Array;\n    device.defaultQueue.writeBuffer(\n      sceneUniformBuffer,\n      64,\n      cameraMatrixData.buffer,\n      cameraMatrixData.byteOffset,\n      cameraMatrixData.byteLength\n    );\n\n    const lightData = lightPosition as Float32Array;\n    device.defaultQueue.writeBuffer(\n      sceneUniformBuffer,\n      128,\n      lightData.buffer,\n      lightData.byteOffset,\n      lightData.byteLength\n    );\n\n    const modelData = modelMatrix as Float32Array;\n    device.defaultQueue.writeBuffer(\n      modelUniformBuffer,\n      0,\n      modelData.buffer,\n      modelData.byteOffset,\n      modelData.byteLength\n    );\n  }\n\n  // Rotates the camera around the origin based on time.\n  function getCameraViewProjMatrix() {\n    const eyePosition = vec3.fromValues(0, 50, -100);\n\n    const rad = Math.PI * (Date.now() / 2000);\n    vec3.rotateY(eyePosition, eyePosition, origin, rad);\n\n    const viewMatrix = mat4.create();\n    mat4.lookAt(viewMatrix, eyePosition, origin, upVector);\n\n    mat4.multiply(viewProjMatrix, projectionMatrix, viewMatrix);\n    return viewProjMatrix as Float32Array;\n  }\n\n  const shadowPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [],\n    depthStencilAttachment: {\n      attachment: shadowDepthTextureView,\n      depthLoadValue: 1.0,\n      depthStoreOp: 'store',\n      stencilLoadValue: 0,\n      stencilStoreOp: 'store',\n    },\n  };\n\n  return function frame() {\n    const cameraViewProj = getCameraViewProjMatrix();\n    device.defaultQueue.writeBuffer(\n      sceneUniformBuffer,\n      64,\n      cameraViewProj.buffer,\n      cameraViewProj.byteOffset,\n      cameraViewProj.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].attachment = swapChain\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    {\n      const shadowPass = commandEncoder.beginRenderPass(shadowPassDescriptor);\n      shadowPass.setPipeline(shadowPipeline);\n      shadowPass.setBindGroup(0, sceneBindGroupForShadow);\n      shadowPass.setBindGroup(1, modelBindGroup);\n      shadowPass.setVertexBuffer(0, vertexBuffer);\n      shadowPass.setIndexBuffer(indexBuffer, 'uint16');\n      shadowPass.drawIndexed(indexCount);\n\n      shadowPass.endPass();\n    }\n    {\n      const renderPass = commandEncoder.beginRenderPass(renderPassDescriptor);\n      renderPass.setPipeline(pipeline);\n      renderPass.setBindGroup(0, sceneBindGroupForRender);\n      renderPass.setBindGroup(1, modelBindGroup);\n      renderPass.setVertexBuffer(0, vertexBuffer);\n      renderPass.setIndexBuffer(indexBuffer, 'uint16');\n      renderPass.drawIndexed(indexCount);\n\n      renderPass.endPass();\n    }\n    device.defaultQueue.submit([commandEncoder.finish()]);\n  };\n}\n\nconst glslShaders = {\n  vertexShadow: `#version 450\nlayout(set = 0, binding = 0) uniform Scene {\n  mat4 lightViewProjMatrix;\n  mat4 cameraViewProjMatrix;\n  vec3 lightPos;\n} scene;\n\nlayout(set = 1, binding = 0) uniform Model {\n  mat4 modelMatrix;\n} model;\n\nlayout(location = 0) in vec3 position;\n\nvoid main() {\n  gl_Position =\n    scene.lightViewProjMatrix * model.modelMatrix * vec4(position, 1.0);\n}\n`,\n\n  fragmentShadow: `#version 450\nvoid main() {\n}\n`,\n\n  vertex: `#version 450\nlayout(set = 0, binding = 0) uniform Scene {\n  mat4 lightViewProjMatrix;\n  mat4 cameraViewProjMatrix;\n  vec3 lightPos;\n} scene;\n\nlayout(set = 1, binding = 0) uniform Model {\n  mat4 modelMatrix;\n} model;\n\nlayout(location = 0) in vec3 position;\nlayout(location = 1) in vec3 normal;\n\nlayout(location = 0) out vec3 shadowPos;\nlayout(location = 1) out vec3 fragPos;\nlayout(location = 2) out vec3 fragNorm;\n\nvoid main() {\n  // XY is in (-1, 1) space, Z is in (0, 1) space\n  vec4 posFromLight = scene.lightViewProjMatrix * model.modelMatrix * vec4(position, 1.0);\n\n  // Convert XY to (0, 1)\n  // Y is flipped because texture coords are Y down.\n  shadowPos = vec3(posFromLight.xy * vec2(0.5, -0.5) + 0.5, posFromLight.z);\n\n  gl_Position =\n    scene.cameraViewProjMatrix * model.modelMatrix * vec4(position, 1.0);\n  fragPos = gl_Position.xyz;\n  fragNorm = normal;\n}\n`,\n\n  // prettier-ignore\n  fragment: `#version 450\nlayout(set = 0, binding = 0) uniform Scene {\n  mat4 lightViewProjMatrix;\n  mat4 cameraViewProjMatrix;\n  vec3 lightPos;\n} scene;\nlayout(set = 0, binding = 1) uniform texture2D shadowMap;\nlayout(set = 0, binding = 2) uniform samplerShadow shadowSampler;\n\nlayout(location = 0) in vec3 shadowPos;\nlayout(location = 1) in vec3 fragPos;\nlayout(location = 2) in vec3 fragNorm;\n\nlayout(location = 0) out vec4 outColor;\n\nconst vec3 albedo = vec3(0.9);\nconst float ambientFactor = 0.2;\n\nvoid main() {\n  // Percentage-closer filtering. Sample texels in the region\n  // to smooth the result.\n  float shadowFactor = 0.0;\n  for (int y = -1 ; y <= 1 ; y++) {\n      for (int x = -1 ; x <= 1 ; x++) {\n        vec2 offset = vec2(\n          x * ${1 / shadowDepthTextureSize},\n          y * ${1 / shadowDepthTextureSize});\n\n        shadowFactor += texture(\n          sampler2DShadow(shadowMap, shadowSampler),\n          vec3(shadowPos.xy + offset, shadowPos.z - 0.007));\n      }\n  }\n\n  shadowFactor = ambientFactor + shadowFactor / 9.0;\n\n  float lambertFactor = abs(dot(normalize(scene.lightPos - fragPos), fragNorm));\n\n  float lightingFactor = min(shadowFactor * lambertFactor, 1.0);\n  outColor = vec4(lightingFactor * albedo, 1.0);\n}\n`,\n};\n\nconst wgslShaders = {\n  vertexShadow: `\n[[block]] struct Scene {\n  [[offset(0)]] lightViewProjMatrix : mat4x4<f32>;\n  [[offset(64)]] cameraViewProjMatrix : mat4x4<f32>;\n  [[offset(128)]] lightPos : vec3<f32>;\n};\n\n[[block]] struct Model {\n  [[offset(0)]] modelMatrix : mat4x4<f32>;\n};\n\n[[set(0), binding(0)]] var<uniform> scene : Scene;\n[[set(1), binding(0)]] var<uniform> model : Model;\n\n[[location(0)]] var<in> position : vec3<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  Position = scene.lightViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n}\n`,\n\n  fragmentShadow: `\n[[stage(fragment)]]\nfn main() -> void {\n}\n`,\n\n  vertex: `\n[[block]] struct Scene {\n  [[offset(0)]] lightViewProjMatrix : mat4x4<f32>;\n  [[offset(64)]] cameraViewProjMatrix : mat4x4<f32>;\n  [[offset(128)]] lightPos : vec3<f32>;\n};\n\n[[block]] struct Model {\n  [[offset(0)]] modelMatrix : mat4x4<f32>;\n};\n\n[[set(0), binding(0)]] var<uniform> scene : Scene;\n[[set(1), binding(0)]] var<uniform> model : Model;\n\n[[location(0)]] var<in> position : vec3<f32>;\n[[location(1)]] var<in> normal : vec3<f32>;\n\n[[location(0)]] var<out> shadowPos : vec3<f32>;\n[[location(1)]] var<out> fragPos : vec3<f32>;\n[[location(2)]] var<out> fragNorm : vec3<f32>;\n\n[[builtin(position)]] var<out> Position : vec4<f32>;\n\n[[stage(vertex)]]\nfn main() -> void {\n  # XY is in (-1, 1) space, Z is in (0, 1) space\n  const posFromLight : vec4<f32> = scene.lightViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n\n  # Convert XY to (0, 1)\n  # Y is flipped because texture coords are Y-down.\n  shadowPos = vec3<f32>(\n    posFromLight.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5),\n    posFromLight.z\n  );\n\n  Position = scene.cameraViewProjMatrix * model.modelMatrix * vec4<f32>(position, 1.0);\n  fragPos = Position.xyz;\n  fragNorm = normal;\n}\n`,\n  fragment: `\n[[block]] struct Scene {\n  [[offset(0)]] lightViewProjMatrix : mat4x4<f32>;\n  [[offset(64)]] cameraViewProjMatrix : mat4x4<f32>;\n  [[offset(128)]] lightPos : vec3<f32>;\n};\n\n[[set(0), binding(0)]] var<uniform> scene : Scene;\n[[set(0), binding(1)]] var<uniform_constant> shadowMap: texture_depth_2d;\n[[set(0), binding(2)]] var<uniform_constant> shadowSampler: sampler_comparison;\n\n[[location(0)]] var<in> shadowPos : vec3<f32>;\n[[location(1)]] var<in> fragPos : vec3<f32>;\n[[location(2)]] var<in> fragNorm : vec3<f32>;\n\n[[location(0)]] var<out> outColor : vec4<f32>;\n\nconst albedo : vec3<f32> = vec3<f32>(0.9, 0.9, 0.9);\nconst ambientFactor : f32 = 0.2;\n\n[[stage(fragment)]]\nfn main() -> void {\n  # Percentage-closer filtering. Sample texels in the region\n  # to smooth the result.\n  var shadowFactor : f32 = 0.0;\n  for (var y : i32 = -1 ; y <= 1 ; y = y + 1) {\n      for (var x : i32 = -1 ; x <= 1 ; x = x + 1) {\n        const offset : vec2<f32> = vec2<f32>(\n          f32(x) * ${1 / shadowDepthTextureSize},\n          f32(y) * ${1 / shadowDepthTextureSize});\n\n        shadowFactor = shadowFactor + textureSampleCompare(\n          shadowMap, shadowSampler,\n          shadowPos.xy + offset, shadowPos.z - 0.007);\n      }\n  }\n\n  shadowFactor = ambientFactor + shadowFactor / 9.0;\n\n  const lambertFactor : f32 = abs(dot(normalize(scene.lightPos - fragPos), fragNorm));\n\n  const lightingFactor : f32 = min(shadowFactor * lambertFactor, 1.0);\n  outColor = vec4<f32>(lightingFactor * albedo, 1.0);\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Shadow Mapping',\n  description:\n    'This example shows how to sample from a depth texture to render shadows.',\n  slug: 'shadowMapping',\n  init,\n  wgslShaders,\n  glslShaders,\n  source: __SOURCE__,\n});\n"})},"N/8h":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/shadowMapping",function(){return t("DELu")}])}},[["N/8h",0,1,4,6,2,3,5]]]);